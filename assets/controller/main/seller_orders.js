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
    create_item,
    read_items,
    read_items_fr_seller,
    update_item,
    delete_item,
                                              } from "/assets/model/remote/items.js"

import {                  
    create_cart_status,
    read_cart_status,
    update_cart_status,
    delete_cart_status,
                                            } from "/assets/model/remote/shopping_cart_status_history.js"

import {                  
    create_cart_item,
    read_cart_items,
    read_cart_items_fr_seller,
    read_cart_items_fr_user,
    update_cart_item,
    delete_cart_item,
                                                } from "/assets/model/remote/shopping_cart.js"
// controller
import { seller_update_status_submit } from "/assets/controller/submit/seller_update_status_submit.js"
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
import { seller_orders_view   } from "/assets/view/js/main/seller_orders_view.js"

seller_orders_view()

function getRating(rating){
    let ret = ""
    for (let i = 0; i < rating; i++){
        ret += ' ⭐';
    }
    return ret;
}

function getProductListInnerHTMLof(items){
    return  items.map((item, i) => /*html*/`
                    <div class="col mb-3" style="color: gray" >
                        <div class="card mb-3 border-1 p-0 position-relative shadow mx-auto" style="width:250px;height:600px">
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
                                <a class="desc-selection" href="/assets/view/pages/search.html?search=${item.items.id}">
                                    <h4 class="d-flex align-middle desc-selection card-title" style="height:30px;overflow-y:hidden;margin-bottom:1px">${item.items.description}</h4>
                                </a>
                                <p class="" style="height:45px;overflow-y:hidden;margin-bottom:0;font-size:10px">${item.items.specs}</p>
                                
                                <h4 class="text-warning" style="height:30px;overflow-y:hidden;white-space:nowrap;margin-bottom:0"> <b> <i> ₱${item.price.toLocaleString()} </i> </b> </h4>
                                <div align="center" class="d-flex justify-content-center" style="height:30px;padding:0">
                                    <p>${item.payment_method}</p>
                                </div>
                                <div align="center" class="d-flex justify-content-center" style="height:30px;padding:0">
                                    <p style="font-size:10px">${item.order_date}</p>
                                </div>
                                <hr>
                                <div align="center" class="d-flex justify-content-center" style="height:25px;padding:0">
                                    <p class="text-capitalize" style="font-size:15px">${item.users.name}</p>
                                </div>
                                <div align="center" class="d-flex justify-content-center" style="height:15px;padding:0">
                                    <p style="font-size:10px">${item.users.email1}</p>
                                </div>
                                <div align="center" class="d-flex justify-content-center" style="height:15px;padding:0">
                                    <p style="font-size:10px">${item.users.contact}</p>
                                </div>
                                <div align="center" class="d-flex justify-content-center" style="height:45px;padding:0">
                                    <p style="font-size:10px">${item.users.address}</p>
                                </div>
                                <hr>
                                <div align="center" class="d-flex justify-content-center" style="height:15px;padding:0">
                                    <p style="font-size:12px">${item.status_update}</p>
                                </div>
                                <br>
                                <div class="row g-1">
                                    <div class="col-6">
                                        <button 
                                            type="button" 
                                            class="btn btn-outline-danger" 
                                            id="${i}"
                                            data-bs-toggle="modal" data-bs-target="#staticBackdrop2-${item.id}"
                                          >
                                            <i class="bi bi-eraser"></i>
                                            <br>
                                            Cancel Orders
                                        </button>
                                    </div>
                                    <div class="col-6">
                                        <button 
                                           type="button" 
                                           class="btn btn-outline-secondary"
                                           id="mod-${item.id}"
                                         >
                                            <i class="bi bi-pen"></i><br>
                                            Update Status
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
                                        <h5 class="modal-title text-white" id="staticBackdropLabel">Are you sure you want to DELETE ${item.items.description} Product?</h5>
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
                                    <div class="modal-footer" id="del-${item.id}">
                                        <button  class="btn btn-outline-danger " data-bs-dismiss="modal">YES</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                `).join('\n')
}

// respond for submitting update product item
seller_product_form_submit2(() => {
    // put some loading animation messages here
    console.log('hoy')
    }, item => {
        update_item(item, items => { // on successfully saved item
            //sconsole.log(categories)
            window.location = "/assets/view/pages/seller_product.html"
        })
    })

// images file picker for product
function getProductImage2(){
    // add to file_path value to images
    let images = JSON.parse($('#images2').val())
    document.getElementById('product-image-div-2').innerHTML = 
        images.map ( (value,i) => (/*html*/`
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
        `)).join('\n')
    
    for (let i = 0; i < images.length; i++) {
        let a = document.getElementById(`${i}`)
        a.addEventListener("click", async  (e) => {
            let images = JSON.parse($('#images2').val())
            let x = parseInt(a.id)
            del_image([images[x]])
            images.splice(x, 1)
            $('#images2').val(JSON.stringify(images))
            getProductImage2()
        })
    }

    document.getElementById('main_image2').value   = (images.length > 0) ? images[0] : ''
    let img2 = document.getElementById("product-image-filename2");
    img2.classList.add("is-valid");
    img2.classList.remove("is-invalid");
    images = JSON.parse($('#images2').val())
    if (images.length === 0){
        img2.value = null
        img2.classList.add("is-invalid");
        img2.classList.remove("is-valid");
    }
}

let img3 = document.getElementById("product-image-filename2");
if (img3) {
    //console.log(img2);
    img3.addEventListener("change", (e) => {
        handleImageFileUpload(e, 400, resized_file => {
            // put some loading animation message here
            save_image(resized_file, makeid, file_path => {
                let images = JSON.parse($('#images2').val())
                images.push(file_path)
                $('#images2').val(JSON.stringify(images));
                getProductImage2()
                // remove loading animation message here
            })
        });
    });
}

read_user( user => {
    $('#seller_email1').val(user.email1);
    //read_items_fr_seller(user, products => {
    read_cart_items_fr_seller(user, items => {
        let products = items.filter( x => x.status === 'order')
        console.log(products)
        //console.log(JSON.parse(products[0].images))
        $('#seller-orders-list').html(
            getProductListInnerHTMLof(products)
        )
        read_categories(null, categories => {
            //console.log(categories)
            $('#category_id2').html(
                /*html*/`<option>Non is selected</option>` +
                categories.map( value => (/*html*/`
                    <option value="${value.id}">${value.name}</option>
                `/*html*/)).join('\n'))
        })
        // add on click event for each modify product button
        for (let item of products) {
            let del_btn2 = document.getElementById(`del-${item.id}`)
            del_btn2.addEventListener('click', (e) => {
                let product_id = btn2.id.replace('mod-','')
                delete_cart_item(product_id, error => {
                    window.location.reload()
                })
            })
            let btn2 = document.getElementById(`mod-${item.id}`)
            btn2.addEventListener('click', (e) => {
                let product_id = btn2.id.replace('mod-','')
                showModal_with_data('exampleModal-update-item', () => {
                    read_cart_items(product_id, item => {
                        let value = item[0]
                        read_items(value.item_id, items2 => {
                            console.log('items2')
                            console.log(items2)
                            for (let key in items2[0]) {
                                if ((key !== "on_sale") && (key !== "on_stop_sell")) // dont include checkbox and radio boxes
                                    $(`#${key}2`).val(items2[0][key]);
                            }
                            getProductImage2()
                            $('#seller_email2').val(value.seller_email1);
                            $('#email2').val(value.email1);
                            $('#id2').val(value.id);
                            $('#discount_p2').val(value.discount_p);
                            document.getElementById(`on_sale2`).checked = value['on_sale']
                            $('#item_id2').val(value.item_id);
                            $('#order_date2').val(value.order_date);
                            $('#payment_method2').val(value.payment_method);
                            $('#price2').val(value.price);
                            $('#sold2').val(value.sold);
                            $('#status2').val(value.status);
                            $('#status_update2').val(value.status_update);
                            $('#unit_price2').val(value.unit_price);
                            read_cart_status(value.id, status => 
                                $('#status-history-list').html(
                                    status.map( value => (/*html*/`

                                        <div class="border p-2 mb-1 rounded">
                                            <p style="font-size:12px; margin-bottom: 3px"> ${value.date} </p>
                                            <span class="text-success"><i class="bi bi-check-circle"></i></span> 
                                            <span class="badge bg-primary"> ${value.status} </span><br>
                                        </div>



                                `/*html*/)).join('\n')))

                        })
                    })
                })
            })
        }
    })
})

seller_update_status_submit(()=>{
}, data => {
    console.log('data')
    console.log(data)
    update_cart_item( data, updated_cart_items => {
        console.log('updated_cart_items')
        console.log(updated_cart_items)
        let id1 = updated_cart_items[0].id
        let cart_status = {
            cart_id : updated_cart_items[0].id,
            status  : updated_cart_items[0].status_update,
            date    : (new Date(Date.now())).toString(),
        }
        create_cart_status(cart_status, () => {
            window.location = '/assets/view/pages/seller_orders.html'
        })
    })
})

read_categories(null, categories => {
    //console.log(categories)
    $('#category_id').html(
        /*html*/`<option>Non is selected</option>` +
        categories.map( value => (/*html*/`
            <option value="${value.id}">${value.name}</option>
        `/*html*/)).join('\n'))
})

// images file picker for category
let img = document.getElementById("image-filename1");
if (img) {
    img.addEventListener("change", (e) => {
        handleImageFileUpload(e, 400, resized_file => {
            // put some loading animation message here
            save_image(resized_file, makeid, file_path => {
                document.getElementById('image').value        = file_path;
                document.getElementById('category-image').src = `${file_path}`
                document.getElementById('category-image-div').classList.remove("d-none");
                img.classList.add("is-valid");
                img.classList.remove("is-invalid");
                // remove loading animation message here
            })
        });
    });
}

// images file picker for product
function getProductImage(){
    // add to file_path value to images
    let images = JSON.parse($('#images').val())
    document.getElementById('product-image-div').innerHTML = 
        images.map ( (value,i) => (/*html*/`
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
                <button type="button" class="btn btn-outline-danger border border-0" id="${i}" style="padding: 0"> <i class="bi bi-trash"></i> </button>
            </div>
        `)).join('\n')
    
    for (let i = 0; i < images.length; i++) {
        let a = document.getElementById(`${i}`)
        a.addEventListener("click", async  (e) => {
            let images = JSON.parse($('#images').val())
            let x = parseInt(a.id)
            del_image([images[x]])
            images.splice(x, 1)
            $('#images').val(JSON.stringify(images))
            getProductImage()
        })
    }

    document.getElementById('main_image').value   = (images.length > 0) ? images[0] : ''
    img2.classList.add("is-valid");
    img2.classList.remove("is-invalid");
    images = JSON.parse($('#images').val())
    if (images.length === 0){
        let img2 = document.getElementById("product-image-filename1");
        img2.value = null
        img2.classList.add("is-invalid");
        img2.classList.remove("is-valid");
    }
}

let img2 = document.getElementById("product-image-filename1");
if (img2) {
    //console.log(img2);
    img2.addEventListener("change", (e) => {
        handleImageFileUpload(e, 400, resized_file => {
            // put some loading animation message here
            save_image(resized_file, makeid, file_path => {
                let images = JSON.parse($('#images').val())
                images.push(file_path)
                $('#images').val(JSON.stringify(images));
                getProductImage()
                // remove loading animation message here
            })
        });
    });
}

admin_new_cat_form_submit(() => {
 // put some loading animation messages here
}, category => {
    create_category(category, categories => { // on successfully saved category
        //sconsole.log(categories)
        window.location = "/assets/view/pages/seller_product.html"
    }, () => { // on failed to save category
        alert ('Failed to save category due to duplicate name.')
        window.location = "/assets/view/pages/seller_product.html"
    })
})

// respond to registraion of new product item
seller_product_form_submit(() => {
// put some loading animation messages here
}, item => {
    create_item(item, items => { // on successfully saved item
        //sconsole.log(categories)
        window.location = "/assets/view/pages/seller_product.html"
    })
})

$('#add_bulk_products').click(function (e) { 
    e.preventDefault();
    console.log(products)
    for (let value of products){
        read_user( user => {
            read_saved_category(async category => {
                let images2 = []
                value.category_id = category.id
                value.seller_email1 = user.email1
                for (let ximg of value.images){
                    images2.push(ximg.url)
                }
                value.images = JSON.stringify(images2)
                create_item (value, items => {
                    console.log(items[0])
                })
            })
        })
    }
    $('#add_bulk_products').addClass('d-none')
});
