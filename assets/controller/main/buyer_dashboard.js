// model
import { read_saved_category } from "/assets/model/local/saved_category.js"
import {
	user_is_logged_in,
	user_is_a,
	read_user,
} from "/assets/model/local/login_user.js"
import {
	save_image,
	save_image2,
	del_image,
} from "/assets/model/remote/file.js"
import {
	create_category,
	read_categories,
} from "/assets/model/remote/categories.js"
import {
	create_seller,
	read_sellers,
	read_sellers2,
	update_seller,
	delete_seller,
} from "/assets/model/remote/sellers.js"

import {
	create_cart_item,
	read_cart_items,
	read_cart_items_fr_seller,
	read_cart_items_fr_user,
	update_cart_item,
	delete_cart_item,
} from "/assets/model/remote/shopping_cart.js"

import {
	create_item,
	read_items,
	update_item,
	delete_item,
} from "/assets/model/remote/items.js"

import {
	create_review,
	read_reviews,
	read_reviews_of,
	update_review,
	delete_review,
} from "/assets/model/remote/product_reviews.js"

import { read_cart_status } from "/assets/model/remote/shopping_cart_status_history.js"
// controller
import { buyer_product_review_submit } from "/assets/controller/submit/buyer_product_review_submit.js"
import { seller_product_form_submit } from "/assets/controller/submit/seller_product_form_submit.js"
import { admin_new_cat_form_submit } from "/assets/controller/submit/admin_new_cat_form_submit.js"
import { seller_product_form_submit2 } from "/assets/controller/submit/seller_product_form_submit2.js"
import {
	handleImageFileUpload,
	handleImage,
	handleImage2,
	makeid,
	showModal_with_data,
} from "/assets/controller/misc/misc.js"

// view
import { buyer_dashboard_view } from "/assets/view/js/main/buyer_dashboard_view.js"

buyer_dashboard_view()

let global_user = null
read_user((user) => {
	global_user = user
	//console.log(global_user)
})

let global_user_buyer = null
global_user_buyer = user_is_a("buyer")

function getRating(rating) {
	let ret = ""
	for (let i = 0; i < rating; i++) {
		ret += " ⭐"
	}
	return ret
}

function getProductListInnerHTMLof_users_cart(items) {
	let html = items
		.map(
			(item, i) => /*html*/ `
                    <div class="col mb-3" style="color: gray" >
                        <div class="card mb-3 border-1 p-0 position-relative shadow mx-auto" style="width:250px">
                            ${
								item.on_sale
									? `
                                <img
                                    height="70px"
                                    src="/assets/view/img/sale.png"
                                    alt="on sale"
                                    class="position-absolute top-0 start-0"
                                />`
									: ""
							}
                            <!-- Modal Trigger -->
                            <div class="image-selection mx-auto" style="height:150px;width:100%;overflow:hidden;">
                                <img
                                    width="100%"
                                    src="${item.items.main_image}"
                                    alt="${item.items.description}"
                                    style="min-height:150px"
                                    data-bs-toggle="modal" data-bs-target="#staticBackdrop-${
										item.id
									}"
                                />
                            </div>
                            <div class="card-body" align="center" style="padding-top:1px">
                                <a class="desc-selection" href="/assets/view/pages/search.html?search=${
									item.items.id
								}">
                                    <h4 class="d-flex align-middle desc-selection card-title" style="height:30px;overflow-y:hidden;margin-bottom:1px">${
										item.items.description
									}</h4>
                                </a>
                                <p class="card-text" style="height:75px;overflow-y:hidden;margin-bottom:0">${
									item.items.specs
								}</p>
                                <h4 class="text-warning" style="height:30px;overflow-y:hidden;white-space:nowrap;margin-bottom:0"> <b> <i> ₱${item.unit_price.toLocaleString()} </i> </b> </h4>
                                ${
									item.on_sale
										? `
                                    <p class="card-text" style="height:25px;overflow-y:hidden;white-space:nowrap;margin-bottom:0"><small class="text-muted">promo ${
										item.discount_p
									}% off <span class="text-decoration-line-through"><b>₱ ${(
												item.unit_price /
												((100 - item.discount_p) / 100)
										  ).toLocaleString()}</b></span></small></p>
                                `
										: '<p class="card-text text-white" style="height:25px;overflow-y:hidden;margin-bottom:0">x</p>'
								}
                                <div align="center" class="d-flex flex-row justify-content-center" style="height:30px;padding:0">
                                    <div class="p-1"> Sold <span class="badge bg-success">${
										item.items.sold
									}</span> </div>
                                    <div class="p-1"> Available <span class="badge bg-danger">${
										item.items.qty - item.items.sold
									}</span> </div>
                                </div>
                                <div style="height:40px;overflow-y:hidden">
                                    <span style="font-size:10px">${
										item.items.sellers.name
									}</span>
                                    <p style="font-size:10px">${
										item.items.sellers.address
									}</p>
                                </div>
                                <div style="height:30px;overflow-y:hidden">
                                    ${getRating(item.items.review_rate)}
                                </div>
                                <div class="row g-1">
                                    <div class="col-12">
                                        <button 
                                            type="button" 
                                            class="btn btn-outline-danger w-100" 
                                            id="${i}"
                                            data-bs-toggle="modal" data-bs-target="#staticBackdrop2-${
												item.id
											}"
                                          >
                                            <i class="bi bi-cart-x"></i>
                                            Remove From Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Modal -->
                        <div class="modal fade" id="staticBackdrop-${
							item.id
						}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg modal-dialog-centered  modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-header bg-primary-subtle">
                                        <h5 class="modal-title" id="staticBackdropLabel">${
											item.items.description
										}</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        ${JSON.parse(item.items.images)
											.map(
												(file) => `
                                            <img
                                                width="100%"
                                                src="${file}"
                                                alt="${file}"
                                            />
                                            <br/>
                                            <br/>
                                        `
											)
											.join("\n")}
                                    </div>
                                    <div class="modal-footer">
                                        <button  class="btn btn-outline-danger " data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <!-- Modal -->
                        <div class="modal fade" id="staticBackdrop2-${
							item.id
						}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg modal-dialog-centered  modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-header bg-danger">
                                        <h6 class="modal-title text-white" id="staticBackdropLabel">
                                            <span style="font-size:30px"><i class="bi bi-cart"></i></span>
                                            Are you sure you want ${
												item.items.description
											} to be deleted from Cart?
                                        </h6>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                            <img
                                                width="100%"
                                                src="${
													JSON.parse(
														item.items.images
													)[0]
												}"
                                                alt="xxx"
                                            />
                                            <br/>
                                            <br/>
                                    </div>
                                    <div class="modal-footer" id="del-cart-${
										item.id
									}">
                                        <button  class="btn btn-outline-danger " data-bs-dismiss="modal">YES</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                `
		)
		.join("\n")
	if (items.length === 0) {
		html = "<br><h6>[Empty List]</h6><br><br><br><br><br><br><br><br>"
	}
	return html
}

function getProductListInnerHTMLof_users_deliveries(items) {
	let html = items
		.map(
			(item, i) => /*html*/ `
                    <div class="col mb-3" style="color: gray" >
                        <div class="card mb-3 border-1 p-0 position-relative shadow mx-auto" style="width:250px;height:600px">
                            ${
								item.on_sale
									? `
                                <img
                                    height="70px"
                                    src="/assets/view/img/sale.png"
                                    alt="on sale"
                                    class="position-absolute top-0 start-0"
                                />`
									: ""
							}
                            <!-- Modal Trigger -->
                            <div class="image-selection mx-auto" style="height:150px;width:100%;overflow:hidden;">
                                <img
                                    width="100%"
                                    src="${item.items.main_image}"
                                    alt="${item.items.description}"
                                    style="min-height:150px"
                                    data-bs-toggle="modal" data-bs-target="#staticBackdrop-${
										item.id
									}"
                                />
                            </div>
                            <div class="card-body" align="center" style="padding-top:1px">
                                <a class="desc-selection" href="/assets/view/pages/search.html?search=${
									item.items.id
								}">
                                    <h4 class="d-flex align-middle desc-selection" style="height:60px;overflow-y:hidden;margin-bottom:1px;font-size:13px">
                                        <span class="m-auto"> ${
											item.items.description
										} </span>
                                    </h4>
                                </a>
                                <p class="d-flex align-middle" style="height:45px;overflow-y:hidden;margin-bottom:0;font-size:10px">${
									item.items.specs
								}</p>
                                
                                <h4 class="text-warning" style="height:30px;overflow-y:hidden;white-space:nowrap;margin-bottom:0"> <b> <i> ₱${item.price.toLocaleString()} </i> </b> </h4>
                                <div align="center" class="d-flex justify-content-center" style="height:30px;padding:0">
                                    <p>${item.payment_method}</p>
                                </div>
                                <div align="center" class="d-flex justify-content-center" style="height:30px;padding:0">
                                    <p style="font-size:10px">${
										item.order_date
									}</p>
                                </div>
                                <hr>
                                <div align="center" class="d-flex justify-content-center" style="height:25px;padding:0">
                                    <p class="text-capitalize" style="font-size:15px">${
										item.items.sellers.name
									}</p>
                                </div>
                                <div align="center" class="d-flex justify-content-center" style="height:15px;padding:0">
                                    <p style="font-size:10px">${
										item.items.sellers.email1
									}</p>
                                </div>
                                <div align="center" class="d-flex justify-content-center" style="height:15px;padding:0">
                                    <p style="font-size:10px">${
										item.items.sellers.contact
									}</p>
                                </div>
                                <div align="center" class="d-flex justify-content-center" style="height:45px;padding:0">
                                    <p style="font-size:10px">${
										item.items.sellers.address
									}</p>
                                </div>
                                <hr>
                                <div align="center" class="d-flex justify-content-center" style="height:25px;padding:0">
                                    <span id="see-mod-${
										item.id
									}" class="badge bg-primary categories-selection" style="font-size:12px">${
				item.status_update
			}</span>
                                </div>
                                <br>
                                <div class="row g-1">
                                    <div class="col-6">
                                        <button 
                                            type="button" 
                                            class="btn btn-outline-danger" 
                                            id="${i}"
                                            data-bs-toggle="modal" data-bs-target="#staticBackdrop2-${
												item.id
											}"
                                          >
                                            <i class="bi bi-eraser"></i>
                                            Cancel
                                        </button>
                                    </div>
                                    <div class="col-6">
                                        <button 
                                           type="button" 
                                           class="btn btn-outline-secondary"
                                           data-bs-toggle="modal" data-bs-target="#static-review-${
												item.id
											}"
                                         >
                                            <i class="bi bi-pen"></i>
                                            Review
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Modal -->
                        <div class="modal fade" id="staticBackdrop-${
							item.id
						}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg modal-dialog-centered  modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-header bg-primary-subtle">
                                        <h5 class="modal-title" id="staticBackdropLabel">${
											item.items.description
										}</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        ${JSON.parse(item.items.images)
											.map(
												(file) => `
                                            <img
                                                width="100%"
                                                src="${file}"
                                                alt="${file}"
                                            />
                                            <br/>
                                            <br/>
                                        `
											)
											.join("\n")}
                                    </div>
                                    <div class="modal-footer">
                                        <button  class="btn btn-outline-danger " data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <!-- Modal -->
                        <div class="modal fade" id="staticBackdrop2-${
							item.id
						}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg modal-dialog-centered  modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-header bg-danger">
                                        <h5 class="modal-title text-white" id="staticBackdropLabel">Are you sure you want to CANCEL ${
											item.items.description
										} ORDER?</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                            <img
                                                width="100%"
                                                src="${
													JSON.parse(
														item.items.images
													)[0]
												}"
                                                alt="xxx"
                                            />
                                            <br/>
                                            <br/>
                                    </div>
                                    <div class="modal-footer" id="del-del-${
										item.id
									}">
                                        <button  class="btn btn-outline-danger " data-bs-dismiss="modal">YES</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Modal -->
                        <form>
                            <div class="modal fade" id="static-review-${
								item.id
							}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="static-review-title-${
				item.id
			}" aria-hidden="true">
                                <div class="modal-dialog modal-lg modal-dialog-centered  modal-dialog-scrollable">
                                    <div class="modal-content">
                                        <div class="modal-header bg-primary">
                                            <h6 class="modal-title text-white" id="static-review-title-${
												item.id
											}">
                                                <span style="font-size:30px"><i class="bi bi-card-text"></i></span>
                                                Review for ${
													item.items.description
												}
                                            </h6>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            
                                            <div class="row">
                                                <div id="image-viewer-${
													item.id
												}" class="col-lg-4 p-2">
                                                    <h6>[No Images Uploaded]</h6>
                                                </div>
                                                <div class="col-lg-8 p-2 border-start">
                                                    <input type="text" name="item_id" value="${
														item.items.id
													}" class="form-control d-none">
                                                    <input type="text" name="user_is_a_buyer" value="${global_user_buyer}" class="form-control d-none">
                                                    <input type="text" name="user_email1" value="${
														global_user.email1
													}" class="form-control d-none">
                                                    <input type="text" name="images" value="[]" class="form-control d-none" id="image-${
														item.id
													}">
                                                    <input type="text" name="date" value="${new Date(
														Date.now()
													).toString()}" class="form-control d-none">
                                                    <div class="form-floating mb-3">
                                                        <select class="form-select" name="rating" aria-label="Default select example">
                                                            <option value=1>⭐</option>
                                                            <option value=2>⭐⭐</option>
                                                            <option value=3>⭐⭐⭐</option>
                                                            <option value=4>⭐⭐⭐⭐</option>
                                                            <option value=5 selected>⭐⭐⭐⭐⭐</option>
                                                        </select>
                                                        <label>Rating</label>
                                                    </div>
                                                    <div class="form-floating mb-3">
                                                        <input type="file" class="form-control" id="review-image-${
															item.id
														}" placeholder="try"></input>
                                                        <label>Upload Images</label>
                                                    </div>
                                                    <div class="form-floating mb-3">
                                                        <textarea class="form-control" name="review" placeholder="try"></textarea>
                                                        <label>Review Statement</label>
                                                    </div>              
                                                </div>
                                            </div>

                                        </div>
                                        <div class="modal-footer" id="review-btn-${
											item.id
										}">
                                            <button  class="btn btn-outline-primary " data-bs-dismiss="modal">Submit Review</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>

                `
		)
		.join("\n")
	if (items.length === 0) {
		html = "<br><h6>[Empty List]</h6><br><br><br><br><br><br><br><br>"
	}
	return html
}

function getProductImage2() {
	// add to file_path value to images
	let images = JSON.parse($("#images2").val())
	document.getElementById("product-image-div-2").innerHTML = images
		.map(
			(value, i) => /*html*/ `
            <div class="mx-auto w-75">
                <img
                     width = "100%"
                     class = "img-thumbnail"
                       src = "${value}"
                       alt = "please select a category image"
                    srcset = ""
                        id = "product-image"
                />
            </div>
            <div class="mx-auto  mb-3" style="width: 15px">
                <button 
                     type = "button" 
                    class = "btn btn-outline-danger border border-0 d-none" 
                       id = "${i}" 
                    style = "padding: 0"
                  > 
                    <i class="bi bi-trash"></i> 
                </button>
            </div>
        `
		)
		.join("\n")

	for (let i = 0; i < images.length; i++) {
		let a = document.getElementById(`${i}`)
		a.addEventListener("click", async (e) => {
			let images = JSON.parse($("#images2").val())
			let x = parseInt(a.id)
			del_image([images[x]])
			images.splice(x, 1)
			$("#images2").val(JSON.stringify(images))
			getProductImage2()
		})
	}

	document.getElementById("main_image2").value =
		images.length > 0 ? images[0] : ""
	let img2 = document.getElementById("product-image-filename2")
	img2.classList.add("is-valid")
	img2.classList.remove("is-invalid")
	images = JSON.parse($("#images2").val())
	if (images.length === 0) {
		img2.value = null
		img2.classList.add("is-invalid")
		img2.classList.remove("is-valid")
	}
}

read_user((user) => {
	read_cart_items_fr_user(user, (items) => {
		let cart_items = items.filter((x) => x.status === "cart")
		console.log(cart_items)
		$("#buyer-products-cart-list").html(
			getProductListInnerHTMLof_users_cart(cart_items)
		)
		for (let c_item of cart_items) {
			let del_cart_btn = document.getElementById(`del-cart-${c_item.id}`)
			if (delete_cart_item) {
				del_cart_btn.addEventListener("click", () => {
					let item_id = del_cart_btn.id.replace("del-cart-", "")
					delete_cart_item(item_id, () => {
						window.location.reload()
					})
				})
			}
		}
		let upcoming_shipments = items.filter((x) => x.status === "order")
		console.log(upcoming_shipments)
		$("#buyer-shipment-list").html(
			getProductListInnerHTMLof_users_deliveries(upcoming_shipments)
		)
		for (let d_item of upcoming_shipments) {
			let del_del_btn = document.getElementById(`del-del-${d_item.id}`)
			if (del_del_btn) {
				del_del_btn.addEventListener("click", () => {
					let del_item = del_del_btn.id.replace("del-del-", "")
					read_cart_items(del_item, (cart_items) => {
						let item_id = cart_items[0].item_id
						read_items(item_id, (item) => {
							let x_update_item = item[0]
							x_update_item.sold--
							console.log(x_update_item)
							update_item(x_update_item, (x_items) => {
								delete_cart_item(del_item, () => {
									window.location.reload()
								})
							})
						})
					})
				})
			}
			let see_history = document.getElementById(`see-mod-${d_item.id}`)
			if (see_history) {
				see_history.addEventListener("click", () => {
					let product_id = see_history.id.replace("see-mod-", "")
					showModal_with_data("exampleModal-update-item", () => {
						read_cart_items(product_id, (item) => {
							let value = item[0]
							read_items(value.item_id, (items2) => {
								console.log("items2")
								console.log(items2)
								for (let key in items2[0]) {
									if (
										key !== "on_sale" &&
										key !== "on_stop_sell"
									)
										// dont include checkbox and radio boxes
										$(`#${key}2`).val(items2[0][key])
								}
								getProductImage2()
								$("#seller_email2").val(value.seller_email1)
								$("#email2").val(value.email1)
								$("#id2").val(value.id)
								$("#discount_p2").val(value.discount_p)
								document.getElementById(`on_sale2`).checked =
									value["on_sale"]
								$("#item_id2").val(value.item_id)
								$("#order_date2").val(value.order_date)
								$("#payment_method2").val(value.payment_method)
								$("#price2").val(value.price)
								$("#sold2").val(value.sold)
								$("#status2").val(value.status)
								$("#status_update2").val(value.status_update)
								$("#unit_price2").val(value.unit_price)
								read_cart_status(value.id, (status) =>
									$("#status-history-list").html(
										status
											.map(
												(value) => /*html*/ `
    
                                            <div class="border p-2 mb-1 rounded">
                                                <p style="font-size:12px; margin-bottom: 3px"> ${value.date} </p>
                                                <span class="text-success"><i class="bi bi-check-circle"></i></span> 
                                                <span class="badge bg-primary"> ${value.status} </span><br>
                                            </div>
    
                                    ` /*html*/
											)
											.join("\n")
									)
								)
							})
						})
					})
				})
			}
			// image file input
			let img2 = document.getElementById(`review-image-${d_item.id}`)
			if (img2) {
				//console.log(img2);
				img2.addEventListener("change", (e) => {
					handleImageFileUpload(e, 400, (resized_file) => {
						// put some loading animation message here
						save_image(resized_file, makeid, (file_path) => {
							let images = JSON.parse(
								$(`#image-${d_item.id}`).val()
							)
							images.push(file_path)
							$(`#image-${d_item.id}`).val(JSON.stringify(images))
							getProductImage(d_item.id)
							// remove loading animation message here
						})
					})
				})
			}
		}
	})
})

read_categories(null, (categories) => {
	$("#buyer-category-list").html(
		categories
			.map(
				(value, i) => /*html*/ `

             <div class="col mb-5 category-list" style="color: gray" >
                 <a href="/assets/view/pages/categories.html?id=${value.id}">
                    <div class="card mx-auto  categories-selection shadow" id="cat-btn-${value.id}" style="width:250px; height:215px">
                        <div class="mx-auto shadow border border-2" style="width:100%;height:100px;overflow:hidden">
                            <img width="100%" style="" src="${value.image}" class="card-img-top1" alt="...">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title text-center">${value.name}</h5>
                            <p class="card-text text-center" style="height:45px">${value.desc}</p>
                            
                        </div>
                    </div>
                 </a>
             </div>

         ` /*html*/
			)
			.join("\n")
	)
})

read_sellers(null, (sellers) => {
	$("#buyer-stores-list").html(
		sellers
			.map(
				(value, i) => /*html*/ `

             <div class="col mb-5 category-list" style="color: gray" >
                 <a href="/assets/view/pages/stores.html?id=${value.email1}">
                    <div class="card mx-auto  categories-selection shadow" id="seller-btn-${value.id}" style="width:250px; height:315px">
                        <div class="mx-auto shadow border border-2" style="width:100%;height:250px;overflow:hidden">
                            <img width="100%" style="" src="${value.img}" class="card-img-top1" alt="...">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title text-center">${value.name}</h5>
                            <p class="card-text text-center mb-1" >${value.email1}</p>
                        </div>
                    </div>
                 </a>
             </div>

         ` /*html*/
			)
			.join("\n")
	)
})

// images file picker for product
function getProductImage(item_id) {
	// add to file_path value to images
	let images = JSON.parse($(`#image-${item_id}`).val())
	document.getElementById(`image-viewer-${item_id}`).innerHTML = images
		.map(
			(value, i) => /*html*/ `
            <div class="mx-auto w-75">
                <img
                    width="100%"
                    class="img-thumbnail"
                    src="${value}"
                    alt="please select a category image"
                    srcset=""
                    id="product-image"
                />
            </div>
            <div class="mx-auto  mb-3" style="width: 15px">
                <button type="button" class="btn btn-outline-danger border border-0" id="xxx${i}" style="padding: 0"> <i class="bi bi-trash"></i> </button>
            </div>
        `
		)
		.join("\n")

	for (let i = 0; i < images.length; i++) {
		let a = document.getElementById(`xxx${i}`)
		a.addEventListener("click", async (e) => {
			let images = JSON.parse($(`#image-${item_id}`).val())
			let x = parseInt(a.id.replace("xxx", ""))
			console.log(x)
			console.log(images)
			del_image([images[x]])
			images.splice(x, 1)
			$(`#image-${item_id}`).val(JSON.stringify(images))
			getProductImage(item_id)
		})
	}

	//document.getElementById('main_image').value   = (images.length > 0) ? images[0] : ''
	//img2.classList.add("is-valid");
	///img2.classList.remove("is-invalid");
	images = JSON.parse($(`#image-${item_id}`).val())
	if (images.length === 0) {
		let img2 = document.getElementById(`review-image-${item_id}`)
		img2.value = null
		img2.classList.add("is-invalid")
		img2.classList.remove("is-valid")
	}
}

// reponds to product review submits
buyer_product_review_submit(
	() => {},
	(review) => {
		console.log("reviews")
		console.log(review)
		create_review(review, (reviews) => {
			console.log("reviews")
			console.log(reviews)
			window.history.back()
		})
	}
)
