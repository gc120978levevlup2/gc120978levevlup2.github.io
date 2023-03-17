// model
import {
    read_saved_category,
                                     } from "/assets/model/local/saved_category.js"
import {                  
    user_is_logged_in,
    user_is_a,
    read_user,
                                              } from "/assets/model/local/login_user.js"
import { save_image, save_image2 , del_image  } from "/assets/model/remote/file.js"
import {                  
    create_category,
    read_categories,
                                              } from "/assets/model/remote/categories.js"
import {                  
    create_cart_item,
    read_cart_items,
    read_cart_items_fr_seller,
    read_cart_items_fr_user,
    update_cart_item,
    delete_cart_item,
                                              } from "/assets/model/remote/shopping_cart.js"
// controller
import { seller_product_form_submit  } from "/assets/controller/submit/seller_product_form_submit.js"
import { admin_new_cat_form_submit   } from "/assets/controller/submit/admin_new_cat_form_submit.js"
import { seller_product_form_submit2 } from "/assets/controller/submit/seller_product_form_submit2.js"
import {     
    handleImageFileUpload,
    handleImage,
    handleImage2,
    makeid, 
    showModal_with_data,                 
                                    } from "/assets/controller/misc/misc.js"

// view
import { buyer_dashboard_view   } from "/assets/view/js/main/buyer_dashboard_view.js"

buyer_dashboard_view()

function getRating(rating){
    let ret = ""
    for (let i = 0; i < rating; i++){
        ret += ' ⭐';
    }
    return ret;
}

function getProductListInnerHTMLof_users_cart(items){
    let html = items.map((item, i) => /*html*/`
                    <div class="col mb-3" style="color: gray" >
                        <div class="card mb-3 border-1 p-0 position-relative shadow mx-auto" style="width:250px">
                            ${(item.on_sale) ? `
                                <img
                                    height="70px"
                                    src="/assets/view/img/sale.png"
                                    alt="on sale"
                                    class="position-absolute top-0 start-0"
                                />` : ''}
                            <!-- Modal Trigger -->
                            <div class="image-selection mx-auto" style="height:150px;width:100%;overflow:hidden;">
                                <img
                                    width="100%"
                                    src="${item.items.main_image}"
                                    alt="${item.items.description}"
                                    style="min-height:150px"
                                    data-bs-toggle="modal" data-bs-target="#staticBackdrop-${item.id}"
                                />
                            </div>
                            <div class="card-body" align="center" style="padding-top:1px">
                                <h4 class="card-title" style="height:30px;overflow-y:hidden;margin-bottom:1px">${item.items.description}</h4>
                                <p class="card-text" style="height:75px;overflow-y:hidden;margin-bottom:0">${item.items.specs}</p>
                                <h4 class="text-warning" style="height:30px;overflow-y:hidden;white-space:nowrap;margin-bottom:0"> <b> <i> ₱${item.unit_price.toLocaleString()} </i> </b> </h4>
                                ${(item.on_sale) ? `
                                    <p class="card-text" style="height:25px;overflow-y:hidden;white-space:nowrap;margin-bottom:0"><small class="text-muted">promo ${item.discount_p}% off <span class="text-decoration-line-through"><b>₱ ${((item.unit_price) / ((100-item.discount_p)/100)).toLocaleString()}</b></span></small></p>
                                ` : '<p class="card-text text-white" style="height:25px;overflow-y:hidden;margin-bottom:0">x</p>'}
                                <div align="center" class="d-flex flex-row justify-content-center" style="height:30px;padding:0">
                                    <div class="p-1"> Sold <span class="badge bg-success">${item.items.sold}</span> </div>
                                    <div class="p-1"> Available <span class="badge bg-danger">${item.items.qty - item.items.sold}</span> </div>
                                </div>
                                <div style="height:40px;overflow-y:hidden">
                                    <span style="font-size:10px">${(item.items.sellers.name)}</span>
                                    <p style="font-size:10px">${(item.items.sellers.address)}</p>
                                </div>
                                <div style="height:30px;overflow-y:hidden">
                                    ${getRating(item.items.review_rate)}
                                </div>
                                <div class="row g-1">
                                    <div class="col-6">
                                        <button 
                                            type="button" 
                                            class="btn btn-outline-danger w-100" 
                                            id="${i}"
                                            data-bs-toggle="modal" data-bs-target="#staticBackdrop2-${item.id}"
                                          >
                                            <i class="bi bi-cart-x"></i>
                                            Delete
                                        </button>
                                    </div>
                                    <div class="col-6">
                                        <button 
                                           type="button" 
                                           class="btn btn-outline-secondary w-100"
                                           id="mod-${item.id}"
                                         >
                                            <i class="bi bi-pen"></i>
                                            Review
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Modal -->
                        <div class="modal fade" id="staticBackdrop-${item.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg modal-dialog-centered  modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-header bg-primary-subtle">
                                        <h5 class="modal-title" id="staticBackdropLabel">${item.items.description}</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        ${(JSON.parse(item.items.images)).map((file) => `
                                            <img
                                                width="100%"
                                                src="${file}"
                                                alt="${file}"
                                            />
                                            <br/>
                                            <br/>
                                        `).join('\n')}
                                    </div>
                                    <div class="modal-footer">
                                        <button  class="btn btn-outline-danger " data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <!-- Modal -->
                        <div class="modal fade" id="staticBackdrop2-${item.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg modal-dialog-centered  modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-header bg-danger">
                                        <h6 class="modal-title text-white" id="staticBackdropLabel">
                                            <span style="font-size:30px"><i class="bi bi-cart"></i></span>
                                            Are you sure you want ${item.items.description} to be deleted from Cart?
                                        </h6>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                            <img
                                                width="100%"
                                                src="${JSON.parse(item.items.images)[0]}"
                                                alt="xxx"
                                            />
                                            <br/>
                                            <br/>
                                    </div>
                                    <div class="modal-footer" id="del-cart-${item.id}">
                                        <button  class="btn btn-outline-danger " data-bs-dismiss="modal">YES</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                `).join('\n')
    if (items.length === 0){
        html = '<br><h6>[Empty List]</h6><br><br><br><br><br><br><br><br>'
    }
    return html
}

read_user( user => {
    read_cart_items_fr_user( user, items => {
        let cart_items = items.filter( x => x.status === 'cart')
        console.log(cart_items)
        $('#buyer-products-cart-list').html( getProductListInnerHTMLof_users_cart(cart_items) )
        for (let c_item of cart_items){
            let del_cart_btn = document.getElementById(`del-cart-${c_item.id}`)
            if (delete_cart_item){
                del_cart_btn.addEventListener('click', () => {
                    let item_id = del_cart_btn.id.replace('del-cart-','')
                    delete_cart_item(item_id, () => {
                        window.location.reload()
                    })
                })
            }
        }
    })  
})

read_categories(null, categories => {
    $('#buyer-category-list').html( 
         categories.map( (value, i) => (/*html*/`

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

         `/*html*/)).join('\n')
    )

} )