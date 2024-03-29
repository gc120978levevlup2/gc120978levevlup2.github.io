import { search_view } from "/assets/view/js/main/search_view.js"
import { search_submit } from "/assets/controller/submit/search_submit.js"
import { showModal_with_data } from "/assets/controller/misc/misc.js"
import { read_items_fr_search, read_items } from "/assets/model/remote/items.js"
import { create_cart_item } from "/assets/model/remote/shopping_cart.js"
import {
	user_is_logged_in,
	user_is_a,
	read_user,
} from "/assets/model/local/login_user.js"
import {
	create_review,
	read_reviews,
	read_reviews_of,
	update_review,
	delete_review,
} from "/assets/model/remote/product_reviews.js"
search_view()

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

function getProductListInnerHTMLof_users(items) {
	return items
		.map(
			(item, i) => /*html*/ `
                    <div class="col mb-3 d-flex" style="color: gray" >
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
                                    src="${item.main_image}"
                                    alt="${item.description}"
                                    style="min-height:150px"
                                    data-bs-toggle="modal" data-bs-target="#staticBackdrop-${
										item.id
									}"
                                />
                            </div>
                            <div class="card-body" align="center" style="padding-top:1px">
                                <h4 class="card-title" style="height:30px;overflow-y:hidden;margin-bottom:1px">${
									item.description
								}</h4>
                                <p class="card-text" style="height:75px;overflow-y:hidden;margin-bottom:0">${
									item.specs
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
										item.sold
									}</span> </div>
                                    <div class="p-1"> Available <span class="badge bg-danger">${
										item.qty - item.sold
									}</span> </div>
                                </div>
                                <div style="height:40px;overflow-y:hidden">
                                    <span style="font-size:10px">${
										item.sellers.name
									}</span>
                                    <p style="font-size:10px">${
										item.sellers.address
									}</p>
                                </div>
                                <div style="height:30px;overflow-y:hidden">
                                    ${getRating(item.review_rate)}
                                </div>
                                <div class="row g-1">
                                    <div class="col-6">
                                        <button 
                                            ${
												item.on_stop_sell === true
													? `disabled`
													: ``
											}
                                            type="button" 
                                            class="btn btn-outline-primary w-100" 
                                            id="${i}"
                                            data-bs-toggle="modal" data-bs-target="#staticBackdrop2-${
												item.id
											}"
                                          >
                                            <i class="bi bi-cart"></i><br>
                                            Cart
                                        </button>
                                    </div>
                                    <div class="col-6">
                                        <button 
                                            type="button" 
                                            class="btn btn-outline-warning w-100" 
                                            id="view-review-${item.id}"
                                            data-bs-toggle="modal" data-bs-target="#static-view-reviews"
                                          >
                                          <i class="bi bi-chat-quote"></i><br>
                                            Reviews
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
											item.description
										}</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        ${JSON.parse(item.images)
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
                                    <div class="modal-header bg-primary">
                                        <h6 class="modal-title text-white" id="staticBackdropLabel">
                                            <span style="font-size:30px"><i class="bi bi-cart"></i></span>
                                            Are you sure you want ${
												item.description
											} to be added to Cart?
                                        </h6>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                            <img
                                                width="100%"
                                                src="${
													JSON.parse(item.images)[0]
												}"
                                                alt="xxx"
                                            />
                                            <br/>
                                            <br/>
                                    </div>
                                    <div class="modal-footer" id="add-cart-${
										item.id
									}">
                                        <button  class="btn btn-outline-primary " data-bs-dismiss="modal">YES</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                `
		)
		.join("\n")
}

search_submit(
	() => {},
	(search_obj) => {
		read_items_fr_search(search_obj.search, async (items) => {
			//console.log(items)
			$("#user-search-list").html(getProductListInnerHTMLof_users(items))
			for (let item of items) {
				let add_cart_btn = document.getElementById(
					`add-cart-${item.id}`
				)
				if (add_cart_btn) {
					add_cart_btn.addEventListener("click", () => {
						let item_id = add_cart_btn.id.replace("add-cart-", "")
						read_items(item_id, (items) => {
							items[0].email1 = global_user.email1
							//console.log(items[0])
							create_cart_item(items[0])
						})
					})
				}

				let review_btn = document.getElementById(
					`view-review-${item.id}`
				)
				if (review_btn) {
					review_btn.addEventListener("click", () => {
						let item_id = review_btn.id.replace("view-review-", "")
						read_reviews_of(item_id, (reviews) => {
							console.log(reviews)
							showModal_with_data("static-view-reviews", () => {
								if (reviews.length > 0)
									$("#review-title").html(
										reviews[0].items.description +
											" Reviews"
									)
								else $("#review-title").html(" Reviews")
								$("#reviews-container").html(
									reviews.length > 0
										? reviews
												.map(
													(item) => /*html*/ `
                                    <div class="border rounded p-1 mb-2 bg-body">
                                        <div class="row mb-1">
                                            <div class="col-12 text-capitalize">
                                                <img class="rounded-circle" height="30px" src="${
													item.users.img
												}" alt="">
                                                <span style="float:right">${getRating(
													item.rating
												)}</span>
                                                <span class="badge bg-success"> ${
													item.users.name
												} </span>
                                                <p style="font-size:10px; margin:2px"> ${
													item.date
												} </p>
                                            </div>
                                        </div>
                                        ${show_images(item.images)}
                                        <div class="mx-2" style="font-size:12px">
                                            ${item.review}
                                        </div> 
                                    </div>
                                    ` /*html*/
												)
												.join("\n")
										: "<br><h3>[No Reviews Available]</h3><br><br><br><br><br><br><br>"
								)
							})
						})
					})
				}
			}
		})
	}
)

function show_images(array) {
	let n = JSON.parse(array).length
	let html = JSON.parse(array)
		.map(
			(item) => /*html*/ `
                    <a target="_blank" href="${item}" style="color:white">
                        <img height="100" src="${item}" alt="${item}">
                    </a>
                ` /*html*/
		)
		.join("\n")
	if (n > 0)
		return /*html*/ `
            <div class="mx-2" style="height:100px;overflow-x:auto;overflow-y:hidden">
                <div style="height:120px;white-space: nowrap;">
                    ${html}
                </div>
            </div>
            `
	/*html*/ else return ""
}
