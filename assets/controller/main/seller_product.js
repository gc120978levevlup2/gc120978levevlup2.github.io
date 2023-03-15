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
import { seller_product_view   } from "/assets/view/js/main/seller_product_view.js"

seller_product_view()

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
                        <div class="card mb-3 border-1 p-0 position-relative shadow mx-auto" style="width:250px">
                            ${(item.on_sale) ? `
                                <img
                                    height="70px"
                                    src="/assets/view/img/sale.png"
                                    alt="on sale"
                                    class="position-absolute top-0 start-0"
                                />` : ''}
                            <!-- Modal Trigger -->
                            <img
                                height="150px"
                                src="${item.main_image}"
                                alt="${item.description}"
                                class="card-img-top image-selection"
                                data-bs-toggle="modal" data-bs-target="#staticBackdrop-${item.id}"
                            />
                            <div class="card-body" align="center" style="padding-top:1px">
                                <h4 class="card-title" style="height:30px;overflow-y:hidden;margin-bottom:1px">${item.description}</h4>
                                <p class="card-text" style="height:75px;overflow-y:hidden;margin-bottom:0">${item.specs}</p>
                                <h4 class="text-warning" style="height:30px;overflow-y:hidden;white-space:nowrap;margin-bottom:0"> <b> <i> ₱${item.unit_price.toLocaleString()} </i> </b> </h4>
                                ${(item.on_sale) ? `
                                    <p class="card-text" style="height:25px;overflow-y:hidden;white-space:nowrap;margin-bottom:0"><small class="text-muted">promo ${item.discount_p}% off <span class="text-decoration-line-through"><b>₱ ${((item.unit_price) / ((100-item.discount_p)/100)).toLocaleString()}</b></span></small></p>
                                ` : '<p class="card-text text-white" style="height:25px;overflow-y:hidden;margin-bottom:0">x</p>'}
                                <div align="center" class="d-flex flex-row justify-content-center" style="height:30px;padding:0">
                                    <div class="p-1"> Sold <span class="badge bg-success">${item.sold}</span> </div>
                                    <div class="p-1"> Available <span class="badge bg-danger">${item.qty - item.sold}</span> </div>
                                </div>
                                <div style="height:30px;overflow-y:hidden">
                                    ${getRating(item.review_rate)}
                                </div>
                                <div class="row g-1">
                                    <div class="col-6">
                                        ${((item.qty - item.sold) > 0) ? `
                                            <button 
                                                type="button" 
                                                class="btn btn-outline-danger" 
                                                id="${i}"
                                                data-bs-toggle="modal" data-bs-target="#staticBackdrop2-${item.id}"
                                            >
                                                <i class="bi bi-eraser"></i>
                                                <br>
                                                Remove Product
                                            </button>
                                        ` : '<br>'}
                                    </div>
                                    <div class="col-6">
                                        <button 
                                           type="button" 
                                           class="btn btn-outline-secondary"
                                           id="mod-${item.id}"
                                         >
                                            <i class="bi bi-pen"></i>
                                            <br>
                                            Modify Product
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
                                        <h5 class="modal-title" id="staticBackdropLabel">${item.description}</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        ${(JSON.parse(item.images)).map((file) => `
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
                                        <h5 class="modal-title text-white" id="staticBackdropLabel">Are you sure you want to DELETE ${item.description} Product?</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                            <img
                                                width="100%"
                                                src="${JSON.parse(item.images)[0]}"
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
                    class = "btn btn-outline-danger border border-0" 
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
    read_items_fr_seller(user, products => {
        //console.log(products)
        //console.log(JSON.parse(products[0].images))
        $('#seller-products-list').html(
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
        // add on click even for each modify product button
        for (let item of products) {
            let del_btn2 = document.getElementById(`del-${item.id}`)
            del_btn2.addEventListener('click', (e) => {
                let product_id = btn2.id.replace('mod-','')
                delete_item(product_id, error => {
                    window.location.reload()
                })
            })
            let btn2 = document.getElementById(`mod-${item.id}`)
            btn2.addEventListener('click', (e) => {
                let product_id = btn2.id.replace('mod-','')
                showModal_with_data('exampleModal-update-item', () => {
                    read_items(product_id, item => {
                        let value = item[0]
                        //console.log(value.main_image)
                        for (let key in value) {
                            if ((key !== "on_sale") && (key !== "on_stop_sell")) // dont include checkbox and radio boxes
                                $(`#${key}2`).val(value[key]);
                        }
                        $('#seller_email2').val(value.seller_email1);
                        document.getElementById(`on_sale2`).checked      = value['on_sale']
                        document.getElementById(`on_stop_sell2`).checked = value['on_stop_sell']
                        getProductImage2()
                    })
                })
            })
        }
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
                    src="https://naeydbqunatldbdyzylj.supabase.co/storage/v1/object/public/images/${value}"
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
    /* Sir Rey
    let products = [


        {
            on_sale     : false,
            description : "OKRA VEGETABLE SEEDS",
            specs       : "Approx. no. of seeds: 40-50 seeds, Germination Rate: 92% and above, Purity: 99%",
            unit_price  : 27,
            discount_p  : 10,
            qty         : 1000,
            sold        : 200,
            review_rate : 5,
            main_image  : "/assets/img/farm_products/farm0001_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0001_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0001_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0001_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0001_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "WHITE STEM PECHAY SEEDS",
            specs       : "Approx. no. of seeds: 1,644 seeds, Germination Rate: 90% and above, Purity: 99%",
            unit_price  : 21,
            discount_p  : 10,
            qty         :  1000,
            sold        : 200,
            review_rate : 5,
            main_image  : "/assets/img/farm_products/farm0002_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0002_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0002_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0002_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0002_00004.webp"
                },
            ]
        },      
    
        {
            on_sale     : false,
            description : "EGGPLANT LONG PURPLE VEGETABLE SEEDS",
            specs       : "Approx. no. of seeds: 123 seeds, Germination Rate: 90% and above, Purity: 99%",
            unit_price  : 28,
            discount_p  : 10,
            qty         :  1000,
            sold        : 200,
            review_rate : 5,
            main_image  : "/assets/img/farm_products/farm0003_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0003_00001.webp"
                },
                 {
                    url : "/assets/img/farm_products/farm0003_00002.webp"
                },
                 {
                    url : "/assets/img/farm_products/farm0003_00003.webp"
                },
                 {
                    url : "/assets/img/farm_products/farm0003_00004.webp"
                },
            ]
        },
    
         {
            on_sale     : false,
            description : "BIG WAVE LETTUCE SEEDS",
            specs       : "Approx. no. of seeds: 1000 seeds, Germination Rate: 90% and above, Purity: 99%",
            unit_price  : 19,
            discount_p  : 10,
            qty         :  1000,
            sold        : 150,
            review_rate : 5,
            main_image  : "/assets/img/farm_products/farm0004_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0004_00001.webp"
                },
                 {
                    url : "/assets/img/farm_products/farm0004_00002.webp"
                },
                 {
                    url : "/assets/img/farm_products/farm0004_00003.webp"
                },
                 {
                    url : "/assets/img/farm_products/farm0004_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "SWEET PEPPER SEEDS",
            specs       : "Approx. no. of seeds: 60 seeds, Germination Rate: 90% and above, Purity: 99%",
            unit_price  : 25,
            discount_p  : 10,
            qty         :  1000,
            sold        : 150,
            review_rate : 5,
            main_image  : "/assets/img/farm_products/farm0005_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0005_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0005_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0005_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0005_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "SUPER POPE TOMATO",
            specs       : "Approx. no. of seeds: 150 seeds, Germination Rate: 85% and above, Purity: 99%",
            unit_price  : 25,
            discount_p  : 10,
            qty         :  1000,
            sold        : 150,
            review_rate : 5,
            main_image  : "/assets/img/farm_products/farm0006_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0006_00001.webp"
                },
                 {
                    url : "/assets/img/farm_products/farm0006_00002.webp"
                },
                 {
                    url : "/assets/img/farm_products/farm0006_00003.webp"
                },
                 {
                    url : "/assets/img/farm_products/farm0006_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "SMOOTH PATOLA SEEDS",
            specs       : "Approx. no. of seeds: 20 seeds, Germination Rate: 89% and above, Purity: 99%",
            unit_price  : 25,
            discount_p  : 10,
            qty         :  1000,
            sold        : 150,
            review_rate : 5,
            main_image  : "/assets/img/farm_products/farm0007_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0007_00001.webp"
                },
               {
                    url : "/assets/img/farm_products/farm0007_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0007_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0007_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "ROMAINE LETTUCE SEEDS",
            specs       : "Approx. no. of seeds: 882 seeds, Germination Rate: 89% and above, Purity: 99%",
            unit_price  : 15,
            discount_p  : 10,
            qty         :  1000,
            sold        : 150,
            review_rate : 5,
            main_image  : "/assets/img/farm_products/farm0008_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0008_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0008_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0008_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0008_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "SUPER SWEET CORN SEEDS",
            specs       : "Approx. no. of seeds: 60 seeds, Germination Rate: 89% and above, Purity: 99%",
            unit_price  : 20,
            discount_p  : 10,
            qty         :  1000,
            sold        : 150,
            review_rate : 3,
            main_image  : "/assets/img/farm_products/farm0009_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0009_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0009_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0009_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0009_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "JUMBO GIANT SUNFLOWER SEEDS",
            specs       : "Approx. no. of seeds: 1Kilogram, Germination Rate: 89% and above, Purity: 99%",
            unit_price  : 109,
            discount_p  : 10,
            qty         :  1000,
            sold        : 150,
            review_rate : 3,
            main_image  : "/assets/img/farm_products/farm0010_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0010_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0010_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0010_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0010_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "SNOW WHITE RADISH VEGETABLE SEEDS",
            specs       : "Approx. no. of seeds: 28 seeds, Germination Rate: 89% and above, Purity: 99%",
            unit_price  : 32,
            discount_p  : 10,
            qty         :  1000,
            sold        : 150,
            review_rate : 3,
            main_image  : "/assets/img/farm_products/farm0011_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0011_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0011_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0011_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0011_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "PATOLA TAGALOG SEEDS",
            specs       : "Approx. no. of seeds: 20 seeds, Germination Rate: 89% and above, Purity: 99%",
            unit_price  : 25,
            discount_p  : 10,
            qty         :  1000,
            sold        : 150,
            review_rate : 3,
            main_image  : "/assets/img/farm_products/farm0012_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0012_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0012_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0012_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0012_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "AMPALAYA LONG",
            specs       : "Approx. no. of seeds: 11 seeds, Germination Rate: 89% and above, Purity: 99%",
            unit_price  : 49,
            discount_p  : 10,
            qty         :  1000,
            sold        : 150,
            review_rate : 3,
            main_image  : "/assets/img/farm_products/farm0013_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0013_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0013_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0013_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0013_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "RED BEET SEEDS",
            specs       : "Approx. no. of seeds: 105 seeds, Germination Rate: 89% and above, Purity: 99%",
            unit_price  : 26,
            discount_p  : 10,
            qty         :  1000,
            sold        : 150,
            review_rate : 3,
            main_image  : "/assets/img/farm_products/farm0014_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0014_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0014_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0014_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0014_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "FRENCH BEAN SEEDS",
            specs       : "Approx. no. of seeds: 18 seeds, Germination Rate: 89% and above, Purity: 99%",
            unit_price  : 35,
            discount_p  : 10,
            qty         :  1000,
            sold        : 150,
            review_rate : 3,
            main_image  : "/assets/img/farm_products/farm0015_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0015_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0015_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0015_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0015_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "KURODA CARROT SEEDS",
            specs       : "Approx. no. of seeds: 810 seeds, Germination Rate: 89% and above, Purity: 99%",
            unit_price  : 39,
            discount_p  : 10,
            qty         :  1000,
            sold        : 150,
            review_rate : 3,
            main_image  : "/assets/img/farm_products/farm0016_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0016_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0016_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0016_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0016_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "WHITE LAGKITAN CORN SEEDS",
            specs       : "Approx. no. of seeds: 30 seeds, Germination Rate: 89% and above, Purity: 99%",
            unit_price  : 23,
            discount_p  : 10,
            qty         :  1000,
            sold        : 150,
            review_rate : 5,
            main_image  : "/assets/img/farm_products/farm0017_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0017_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0017_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0017_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0017_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "High Yielding SQUASH",
            specs       : "Approx. no. of seeds: 12 seeds, Germination Rate: 89% and above, Purity: 99%",
            unit_price  : 24,
            discount_p  : 10,
            qty         :  1000,
            sold        : 150,
            review_rate : 5,
            main_image  : "/assets/img/farm_products/farm0018_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0018_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0018_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0018_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0018_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "Bonsai Kalamansi Seeds",
            specs       : "Approx. no. of seeds: 10 seeds, Germination Rate: 89% and above, Purity: 99%",
            unit_price  : 37.02,
            discount_p  : 10,
            qty         :  1000,
            sold        : 150,
            review_rate : 5,
            main_image  : "/assets/img/farm_products/farm0019_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0019_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0019_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0019_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0019_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "Wheat Grass Seeds",
            specs       : "Approx. no. of seeds: 1 Kilogram, Germination Rate: 89% and above, Purity: 99%",
            unit_price  : 152,
            discount_p  : 10,
            qty         :  1000,
            sold        : 102,
            review_rate : 5,
            main_image  : "/assets/img/farm_products/farm0020_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0020_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0020_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0020_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0020_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "GREEN SPINACH / AMARANTH SEEDS",
            specs       : "Approx. no. of seeds: 2,470 seeds, Germination Rate: 89% and above, Purity: 99%",
            unit_price  : 26,
            discount_p  : 10,
            qty         :  1000,
            sold        : 102,
            review_rate : 5,
            main_image  : "/assets/img/farm_products/farm0021_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0021_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0021_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0021_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0021_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "HYBRID SUGAR WAXY CORN",
            specs       : "Approx. no. of seeds: 20 seeds, Germination Rate: 89% and above, Purity: 99%",
            unit_price  : 27,
            discount_p  : 10,
            qty         :  1000,
            sold        : 110,
            review_rate : 5,
            main_image  : "/assets/img/farm_products/farm0022_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0022_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0022_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0022_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0022_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "THAI EGGPLANT DWARF",
            specs       : "Approx. no. of seeds: 128 seeds, Germination Rate: 89% and above, Purity: 99%",
            unit_price  : 59,
            discount_p  : 10,
            qty         :  1000,
            sold        : 110,
            review_rate : 5,
            main_image  : "/assets/img/farm_products/farm0023_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0023_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0023_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0023_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0023_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "Mustasa Seeds",
            specs       : "Approx. no. of seeds: 400 seeds, Germination Rate: 89% and above, Purity: 99%",
            unit_price  : 6.86,
            discount_p  : 10,
            qty         :  1000,
            sold        : 110,
            review_rate : 5,
            main_image  : "/assets/img/farm_products/farm0024_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0024_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0024_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0024_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0024_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "Strawberry Bonsai Seeds",
            specs       : "Approx. no. of seeds: 20 seeds, Germination Rate: 90% and above, Purity: 99%",
            unit_price  : 37,
            discount_p  : 10,
            qty         :  1000,
            sold        : 80,
            review_rate : 5,
            main_image  : "/assets/img/farm_products/farm0025_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0025_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0025_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0025_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0025_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "ILOCOS AMPALAYA / ROUND BITTER GOURD SEEDS",
            specs       : "Approx. no. of seeds: 10 seeds, Germination Rate: 90% and above, Purity: 99%",
            unit_price  : 46,
            discount_p  : 10,
            qty         :  1000,
            sold        : 80,
            review_rate : 5,
            main_image  : "/assets/img/farm_products/farm0026_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0026_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0026_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0026_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0026_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "SUPER SWEET CORN SEEDS",
            specs       : "Approx. no. of seeds: 60 seeds, Germination Rate: 90% and above, Purity: 99%",
            unit_price  : 20,
            discount_p  : 10,
            qty         :  1000,
            sold        : 80,
            review_rate : 5,
            main_image  : "/assets/img/farm_products/farm0027_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0027_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0027_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0027_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0027_00004.webp"
                },
            ]
        },
    
        
        {
            on_sale     : false,
            description : "SILI PANIGANG / Siling Haba / Hot Pepper Green / Bicol Express Chili Seeds",
            specs       : "Approx. no. of seeds: 160 seeds, Germination Rate: 90% and above, Purity: 99%",
            unit_price  : 54,
            discount_p  : 10,
            qty         :  1000,
            sold        : 150,
            review_rate : 5,
            main_image  : "/assets/img/farm_products/farm0028_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0028_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0028_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0028_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0028_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "RED SPINACH SEEDS",
            specs       : "Approx. no. of seeds: 2,125 seeds, Germination Rate: 90% and above, Purity: 99%",
            unit_price  : 25,
            discount_p  : 10,
            qty         :  1000,
            sold        : 10,
            review_rate : 5,
            main_image  : "/assets/img/farm_products/farm0029_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0029_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0029_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0029_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0029_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "Cauliflower Seeds",
            specs       : "Approx. no. of seeds: 20 seeds, Germination Rate: 90% and above, Purity: 99%",
            unit_price  : 32,
            discount_p  : 10,
            qty         :  1000,
            sold        : 10,
            review_rate : 5,
            main_image  : "/assets/img/farm_products/farm0030_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0030_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0030_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0030_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0030_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "Hot Pepper Seeds / Jalapeno Seeds",
            specs       : "Approx. no. of seeds: 76 seeds, Germination Rate: 90% and above, Purity: 99%",
            unit_price  : 76,
            discount_p  : 10,
            qty         :  1000,
            sold        : 100,
            review_rate : 5,
            main_image  : "/assets/img/farm_products/farm0031_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0031_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0031_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0031_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0031_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "Teddy Bear Sunflower Seeds",
            specs       : "Approx. no. of seeds: 10 seeds, Germination Rate: 90% and above, Purity: 99%",
            unit_price  : 36,
            discount_p  : 10,
            qty         :  1000,
            sold        : 100,
            review_rate : 5,
            main_image  : "/assets/img/farm_products/farm0032_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0032_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0032_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0032_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0032_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "ROMA TOMATO Seeds",
            specs       : "Approx. no. of seeds: 150 seeds, Germination Rate: 90% and above, Purity: 99%",
            unit_price  : 39,
            discount_p  : 10,
            qty         :  1000,
            sold        : 100,
            review_rate : 5,
            main_image  : "/assets/img/farm_products/farm0033_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0033_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0033_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0033_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0033_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "Red Sorghum Seeds",
            specs       : "Approx. no. of seeds: 1 Kilogram, Germination Rate: 90% and above, Purity: 99%",
            unit_price  : 83,
            discount_p  : 10,
            qty         :  1000,
            sold        : 150,
            review_rate : 5,
            main_image  : "/assets/img/farm_products/farm0034_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0034_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0034_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0034_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0034_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "BATAO SEEDS",
            specs       : "Approx. no. of seeds: 5 seeds, Germination Rate: 90% and above, Purity: 99%",
            unit_price  : 40,
            discount_p  : 10,
            qty         :  1000,
            sold        : 150,
            review_rate : 5,
            main_image  : "/assets/img/farm_products/farm0035_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0035_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0035_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0035_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0035_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "GIANT SUNFLOWER BLACK OIL SEEDS",
            specs       : "Approx. no. of seeds: 10 seeds, Germination Rate: 90% and above, Purity: 99%",
            unit_price  : 69,
            discount_p  : 10,
            qty         :  1000,
            sold        : 150,
            review_rate : 5,
            main_image  : "/assets/img/farm_products/farm0036_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0036_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0036_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0036_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0036_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "ZUCCHINI VEGETABLE SEEDS",
            specs       : "Approx. no. of seeds: 8 seeds, Germination Rate: 90% and above, Purity: 99%",
            unit_price  : 86,
            discount_p  : 10,
            qty         :  1000,
            sold        : 100,
            review_rate : 5,
            main_image  : "/assets/img/farm_products/farm0037_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0037_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0037_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0037_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0037_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "Mexican Turnip Seeds",
            specs       : "Approx. no. of seeds: 20 seeds, Germination Rate: 90% and above, Purity: 99%",
            unit_price  : 148,
            discount_p  : 10,
            qty         :  1000,
            sold        : 100,
            review_rate : 5,
            main_image  : "/assets/img/farm_products/farm0038_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0038_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0038_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0038_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0038_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "Dun Pea Seeds for sprouts and microgreens",
            specs       : "Approx. no. of seeds: 1 Kilogram, Germination Rate: 90% and above, Purity: 99%",
            unit_price  : 174,
            discount_p  : 10,
            qty         :  1000,
            sold        : 100,
            review_rate : 5,
            main_image  : "/assets/img/farm_products/farm0039_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0039_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0039_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0039_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0039_00004.webp"
                },
            ]
        },
    
        {
            on_sale     : false,
            description : "SWEET PEPPER SEEDS",
            specs       : "Approx. no. of seeds: 60 seeds, Germination Rate: 90% and above, Purity: 99%",
            unit_price  : 25,
            discount_p  : 10,
            qty         :  1000,
            sold        : 100,
            review_rate : 5,
            main_image  : "/assets/img/farm_products/farm0040_00001.webp",
            images      : [
    
                {
                    url : "/assets/img/farm_products/farm0040_00001.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0040_00002.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0040_00003.webp"
                },
                {
                    url : "/assets/img/farm_products/farm0040_00004.webp"
                },
            ]
        },
    ]
    */

    // Sir John
    let products = [


        {
            on_sale     : true,
            description : "NIV, Holy Bible New Testament",
            specs       : "The NIV Holy Bible New Testament is a great tool to give to first-time Bible readers looking to discover God's Word",
            unit_price  : 2800,
            discount_p  : 30,
            qty         : 11,
            sold        : 2,
            review_rate : 5,
            main_image  : "/assets/img/spiritual/spiritual0001_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0001_0001.webp"
                },
    
            ]
        },
    
    
        {
            on_sale     : false,
            description : "NIV, Beautiful Word Bible Journal",
            specs       : "The NIV Beautiful Word Bible Journal, Revelation, includes the full text of the book of Revelation",
            unit_price  : 2422,
            discount_p  : 20,
            qty         : 10,
            sold        : 3,
            review_rate : 4,
            main_image  : "/assets/img/spiritual/spiritual0002_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0002_0001.webp"
                },
                {
                    url : "/assets/img/spiritual/spiritual0002_0002.webp"
                },
                {
                    url : "/assets/img/spiritual/spiritual0002_0003.webp"
                },
                {
                    url : "/assets/img/spiritual/spiritual0002_0004.webp"
                },
                {
                    url : "/assets/img/spiritual/spiritual0002_0005.webp"
                },
                           
            ]
        },
    
    
        {
            on_sale     : false,
            description : "NIV, Outreach New Testament, Large Print",
            specs       : "A low-cost large print Bible perfect for churches, ministries, or individuals looking to share God’s Word.",
            unit_price  : 100,
            discount_p  : 20,
            qty         : 100,
            sold        : 20,
            review_rate : 4,
            main_image  : "/assets/img/spiritual/spiritual0003_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0003_0001.webp"
                },
                
              
                           
            ]
        },
    
    
    
        {
            on_sale     : false,
            description : "The Berenstain Bears Easter Fun Sticker and Activity Book",
            specs       : "The Berenstain Bears come to life this joyful Easter season with puzzles, activity pages, coloring pages, and MORE than 50 stickers in this addition to the Living Lights™ series of Berenstain Bears books. This interactive sticker and activity book is great for Berenstain Bears fans and will provide hours of fun.",
            unit_price  : 240,
            discount_p  : 20,
            qty         : 100,
            sold        : 20,
            review_rate : 4,
            main_image  : "/assets/img/spiritual/spiritual0004_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0004_0001.webp"
                },
                {
                    url : "/assets/img/spiritual/spiritual0004_0002.webp"
                },
                {
                    url : "/assets/img/spiritual/spiritual0004_0003.webp"
                },
                {
                    url : "/assets/img/spiritual/spiritual0004_0004.webp"
                },
                {
                    url : "/assets/img/spiritual/spiritual0004_0005.webp"
                },
              
                           
            ]
        },
    
    
        {
            on_sale     : false,
            description : "Jesus Calling: The Story of Easter (picture book)",
            specs       : "Jesus Calling®: The Story of Easter from bestselling author Sarah Young uses storytelling from throughout the Bible, simple Bible verses, and short Jesus Calling® devotions to show kids how Easter was part of God's plan from the very beginning.",
            unit_price  : 540,
            discount_p  : 40,
            qty         : 100,
            sold        : 20,
            review_rate : 4,
            main_image  : "/assets/img/spiritual/spiritual0005_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0005_0001.webp"
                },
                {
                    url : "/assets/img/spiritual/spiritual0005_0002.webp"
                },
                {
                    url : "/assets/img/spiritual/spiritual0005_0003.webp"
                },
                {
                    url : "/assets/img/spiritual/spiritual0005_0004.webp"
                },
                {
                    url : "/assets/img/spiritual/spiritual0005_0005.webp"
                },
              
                           
            ]
        },
    
        {
            on_sale     : false,
            description : "The Easter Story for Children",
            specs       : "In this beautifully illustrated Easter picture book from bestselling authors Max Lucado, Randy Frazee, and Karen Hill, kids learn about the death and resurrection of Jesus, whose story is filled with love for us all.",
            unit_price  : 225,
            discount_p  : 25,
            qty         : 100,
            sold        : 20,
            review_rate : 4,
            main_image  : "/assets/img/spiritual/spiritual0006_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0006_0001.webp"
                },
                {
                    url : "/assets/img/spiritual/spiritual0006_0002.webp"
                },
                {
                    url : "/assets/img/spiritual/spiritual0006_0003.webp"
                },
                {
                    url : "/assets/img/spiritual/spiritual0006_0004.webp"
                },
                
              
                           
            ]
        },
    
        {
            on_sale     : false,
            description : "The Beginner's Bible Come Celebrate Easter Sticker and Activity Book",
            specs       : "If your family is a fan of The Beginner’s Bible, your children will enjoy The Beginner’s Bible Come Celebrate Easter Sticker and Activity Book, featuring The Beginner’s Bible recognizable art and easy-to-understand written content.",
            unit_price  : 240,
            discount_p  : 25,
            qty         : 100,
            sold        : 30,
            review_rate : 4,
            main_image  : "/assets/img/spiritual/spiritual0007_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0007_0001.webp"
                },
                {
                    url : "/assets/img/spiritual/spiritual0007_0002.webp"
                },
                {
                    url : "/assets/img/spiritual/spiritual0007_0003.webp"
                },
                {
                    url : "/assets/img/spiritual/spiritual0007_0004.webp"
                },
                          
                           
            ]
        },
        
    
        {
            on_sale     : false,
            description : "The Beginner's Bible Come Celebrate Easter Sticker and Activity Book",
            specs       : "If your family is a fan of The Beginner’s Bible, your children will enjoy The Beginner’s Bible Come Celebrate Easter Sticker and Activity Book, featuring The Beginner’s Bible recognizable art and easy-to-understand written content.",
            unit_price  : 240,
            discount_p  : 25,
            qty         : 100,
            sold        : 30,
            review_rate : 4,
            main_image  : "/assets/img/spiritual/spiritual0007_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0007_0001.webp"
                },
                {
                    url : "/assets/img/spiritual/spiritual0007_0002.webp"
                },
                {
                    url : "/assets/img/spiritual/spiritual0007_0003.webp"
                },
                {
                    url : "/assets/img/spiritual/spiritual0007_0004.webp"
                },
                                 
            ]
        },
    
        {
            on_sale     : false,
            description : "Twas the Morning of Easter",
            specs       : "Celebrate the story of Jesus’ resurrection in a fresh way as beloved, bestselling author Glenys Nellist shares the Bible stories of the season in a familiar rhythm and rhyme that children will love, following the classic style of the iconic 'Twas the Night Before Christmas.",
            unit_price  : 540,
            discount_p  : 50,
            qty         : 100,
            sold        : 30,
            review_rate : 4,
            main_image  : "/assets/img/spiritual/spiritual0008_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0008_0001.webp"
                },
                {
                    url : "/assets/img/spiritual/spiritual0008_0002.webp"
                },
                {
                    url : "/assets/img/spiritual/spiritual0008_0003.webp"
                },
                {
                    url : "/assets/img/spiritual/spiritual0008_0004.webp"
                },
                          
                           
            ]
        },
    
        {
            on_sale     : false,
            description : "Twas the Morning of Easter",
            specs       : "Celebrate the story of Jesus’ resurrection in a fresh way as beloved, bestselling author Glenys Nellist shares the Bible stories of the season in a familiar rhythm and rhyme that children will love, following the classic style of the iconic 'Twas the Night Before Christmas.",
            unit_price  : 540,
            discount_p  : 50,
            qty         : 100,
            sold        : 30,
            review_rate : 4,
            main_image  : "/assets/img/spiritual/spiritual0008_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0008_0001.webp"
                },
                {
                    url : "/assets/img/spiritual/spiritual0008_0002.webp"
                },
                {
                    url : "/assets/img/spiritual/spiritual0008_0003.webp"
                },   
    
            ]                                
    
        },    
        
    
        {
            on_sale     : false,
            description : "The Wonder of Creation: 100 More Devotions About God and Science",
            specs       : "In this captivating follow-up to the bestselling kids' devotionals Indescribable and How Great Is Our God, discover more mind-blowing, faith-building scientific facts and biblical truths about the wonder of God's creation from author, speaker, and founder of the Passion movement Louie Giglio.",
            unit_price  : 500,
            discount_p  : 40,
            qty         : 100,
            sold        : 30,
            review_rate : 4,
            main_image  : "/assets/img/spiritual/spiritual0009_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0009_0001.webp"
                },
                {
                    url : "/assets/img/spiritual/spiritual0009_0002.webp"
                },
                {
                    url : "/assets/img/spiritual/spiritual0009_0003.webp"
                },
                {
                    url : "/assets/img/spiritual/spiritual0009_0004.webp"
                },
                {
                    url : "/assets/img/spiritual/spiritual0009_0004.webp"
                },
                                 
            ]
        },
    
        {
            on_sale     : false,
            description : "40 Days With Jesus: Celebrating His Presence",
            specs       : "Spend 40 days with Jesus—from the time leading up to His death on Good Friday to the celebration of His resurrection on Easter Sunday—and celebrate His presence as never before. Select devotions from Sarah Young’s bestselling Jesus Calling have been compiled to create an experience of closeness with the Savior during any time of the year.",
            unit_price  : 100,
            discount_p  : 20,
            qty         : 80,
            sold        : 50,
            review_rate : 4,
            main_image  : "/assets/img/spiritual/spiritual0010_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0010_0001.webp"
                },
                
                                 
            ]
        },
    
    
        {
            on_sale     : false,
            description : "He Gets Us: Experiencing the confounding love, forgiveness, and relevance of Jesus",
            specs       : "Jesus understands our lives because he was human too. He faced the same hardships and personal struggles that we encounter on a daily basis. He felt our deepest sadness and experienced our darkest solitude.",
            unit_price  : 500,
            discount_p  : 20,
            qty         : 70,
            sold        : 40,
            review_rate : 4,
            main_image  : "/assets/img/spiritual/spiritual0011_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0011_0001.webp"
                },
                
                                 
            ]
        },
    
        {
            on_sale     : false,
            description : "The Prayer Code: 40 Scripture Prayers Every Believer Should Pray",
            specs       : "Do you want a richer, more robust prayer life? Your prayers are powerful! Learn how to pray with confidence, faith, and an awareness of the Holy Spirit as you draw from world-changing prayers from Scripture in this inspiring guide to a transformed spiritual life.",
            unit_price  : 450,
            discount_p  : 20,
            qty         : 80,
            sold        : 50,
            review_rate : 4,
            main_image  : "/assets/img/spiritual/spiritual0012_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0012_0001.webp"
                },
                
                                 
            ]
        },
    
        {
            on_sale     : false,
            description : "At the Table with Jesus: 66 Days to Draw Closer to Christ and Fortify Your Faith",
            specs       : "At the Table with Jesus invites readers to sixty-six days of rich engagements with the Good Shepherd, providing deeper truths, power, and connection to walk through life’s troubles. ",
            unit_price  : 550,
            discount_p  : 30,
            qty         : 70,
            sold        : 50,
            review_rate : 4,
            main_image  : "/assets/img/spiritual/spiritual0013_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0013_0001.webp"
                },
                
                                 
            ]
        },
    
        {
            on_sale     : false,
            description : "The Awe of God: The Astounding Way a Healthy Fear of God Transforms Your Life",
            specs       : "Do you long for an intimate relationship with your Creator, but He seems elusive? Perhaps it is because something utterly essential is missing—the fear of the Lord. Don't let this frighten you.",
            unit_price  : 950,
            discount_p  : 55,
            qty         : 60,
            sold        : 60,
            review_rate : 4,
            main_image  : "/assets/img/spiritual/spiritual0014_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0014_0001.webp"
                },
                
                                 
            ]
        },
    
        {
            on_sale     : false,
            description : "Turn My Mourning into Dancing: Finding Hope During Hard Times",
            specs       : "In times of suffering, simple answers often ring empty and hollow--so how can you find hope in hard times? Learn how to survive the difficult seasons with the comfort and of God's constancy. With sensitive, practical advice, Henri Nouwen gently points you towards a life that is grounded in God’s companionship and rooted within eternal hope.",
            unit_price  : 500,
            discount_p  : 30,
            qty         : 60,
            sold        : 50,
            review_rate : 4,
            main_image  : "/assets/img/spiritual/spiritual0015_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0015_0001.webp"
                },
                
                                 
            ]
        },
    
        {
            on_sale     : false,
            description : "Hope for Each Day Morning and Evening Devotions",
            specs       : "Beginning and ending your day with a daily devotional can be a game changer. Leading inspirational author and pastor Billy Graham shares words of wisdom and inspiration for hope-filled living with 730 devotions in Hope for Each Day: Morning and Evening Devotions.",
            unit_price  : 875,
            discount_p  : 50,
            qty         : 60,
            sold        : 40,
            review_rate : 4,
            main_image  : "/assets/img/spiritual/spiritual0016_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0016_0001.webp"
                },
                
                                 
            ]
        },
    
        {
            on_sale     : false,
            description : "100 Favorite Hymns",
            specs       : "Cultivate a deeper appreciation for timeless hymns while drawing closer to God.",
            unit_price  : 450,
            discount_p  : 20,
            qty         : 50,
            sold        : 30,
            review_rate : 4,
            main_image  : "/assets/img/spiritual/spiritual0017_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0017_0001.webp"
                },
                
                {
                    url : "/assets/img/spiritual/spiritual0017_0002.webp"
                },
                                 
            ]
        },
    
        {
            on_sale     : false,
            description : "Start with Prayer: 250 Prayers for Hope and Strength",
            specs       : "Do you find it difficult to turn to prayer when you need it most? Do you have trouble finding the words to capture exactly how you’re feeling?  Start with Prayer, by pastor and New York Times bestselling author Max Lucado, will give you the tools you need to feel more comfortable when you communicate with God.",
            unit_price  : 630,
            discount_p  : 20,
            qty         : 60,
            sold        : 30,
            review_rate : 4,
            main_image  : "/assets/img/spiritual/spiritual0018_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0018_0001.webp"
                },
                                            
            ]
        },
    
        {
            on_sale     : false,
            description : "Surrender Your Story: Ditch the Myth of Control and Discover Freedom in Trusting God",
            specs       : "Popular podcaster and self-proclaimed control freak Tara Sun shows how having everything under control is overrated--not to mention downright dangerous--and reveals the surprising, lifegiving alternative: only radical surrender to God brings the peace and fulfillment we yearn for.",
            unit_price  : 1000,
            discount_p  : 90,
            qty         : 30,
            sold        : 20,
            review_rate : 4,
            main_image  : "/assets/img/spiritual/spiritual0019_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0019_0001.webp"
                },
                                            
            ]
        },
    
        {
            on_sale     : false,
            description : "What on Earth Am I Here For? Purpose Driven Life",
            specs       : "An evangelistic booklet based on the first three chapters of the New York Times #1 bestselling book The Purpose Driven Life.",
            unit_price  : 55,
            discount_p  : 5,
            qty         : 90,
            sold        : 50,
            review_rate : 4,
            main_image  : "/assets/img/spiritual/spiritual0020_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0020_0001.webp"
                },
                                            
            ]
        },
    
        {
            on_sale     : false,
            description : "Holy Roar: 7 Words That Will Change The Way You Worship",
            specs       : "What happens when we praise God? What are the benefits of praising Him? Do you know what praise actually means?",
            unit_price  : 560,
            discount_p  : 25,
            qty         : 70,
            sold        : 50,
            review_rate : 4,
            main_image  : "/assets/img/spiritual/spiritual0021_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0021_0001.webp"
                },
                                            
            ]
        },
    
        {
            on_sale     : false,
            description : "Promises for the Overcomer: 8 Essential Guarantees for Spiritual Victory",
            specs       : "Jesus said, 'In the world you will have tribulation; but be of good cheer, I have overcome the world' (John 16:33).As a disciple of Jesus Christ, you also have overcome the world.",
            unit_price  : 140,
            discount_p  : 5,
            qty         : 80,
            sold        : 20,
            review_rate : 4,
            main_image  : "/assets/img/spiritual/spiritual0022_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0022_0001.webp"
                },
                                            
            ]
        },
    
        {
            on_sale     : false,
            description : "Pocket Prayers: 40 Simple Prayers that Bring Peace and Rest",
            specs       : "Do you ever get distracted when you pray? Do your thoughts zig, then zag, then zig again—your head swarming with all the things you need to do that day? If so, there is hope.",
            unit_price  : 140,
            discount_p  : 15,
            qty         : 90,
            sold        : 30,
            review_rate : 4,
            main_image  : "/assets/img/spiritual/spiritual0023_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0023_0001.webp"
                },
                                            
            ]
        },
    
        {
            on_sale     : false,
            description : "Praying the Scriptures for Your Life: 31 Days of Abiding in the Presence, Provision, and Power of God",
            specs       : "Taking you on a 31-day journey rooted in Christ's words in John 15, Praying the Scriptures for Your Life will help you find guidance and peace as you pray through life's trickiest issues, from relationships to finances to what to do with the pain of unanswered prayer. Discover how Scripture can be experienced, not just read!",
            unit_price  : 500,
            discount_p  : 0,
            qty         : 80,
            sold        : 50,
            review_rate : 4,
            main_image  : "/assets/img/spiritual/spiritual0024_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0024_0001.webp"
                },
                                            
            ]
        },
    
        {
            on_sale     : false,
            description : "Parables: The Mysteries of God's Kingdom Revealed Through the Stories Jesus Told",
            specs       : "Have you ever wondered why Jesus often spoke in parables? Are you curious about what lessons we can learn from these parables today? Pastor and bestselling author John MacArthur breaks down the parables and teaches us how we can apply these deceptively simple stories to modern Christianity.",
            unit_price  : 595,
            discount_p  : 0,
            qty         : 100,
            sold        : 60,
            review_rate : 5,
            main_image  : "/assets/img/spiritual/spiritual0025_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0025_0001.webp"
                },
                                            
            ]
        },
    
        {
            on_sale     : false,
            description : "The Apostles' Code: Unlocking the Power of God’s Spirit in Your Life",
            specs       : "Do you have moments when you feel defeated, scared, or hopeless? Are you looking for a way to understand the work of the Holy Spirit and create a deeper relationship with Christ? Discover the power of the Holy Spirit in your life as bestselling author O",
            unit_price  : 105,
            discount_p  : 0,
            qty         : 90,
            sold        : 60,
            review_rate : 4,
            main_image  : "/assets/img/spiritual/spiritual0026_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0026_0001.webp"
                },
                                            
            ]
        },
    
        {
            on_sale     : false,
            description : "Overcomer Bible Study Guide: Live a Life of Unstoppable Strength, Unmovable Faith, and Unbelievable Power",
            specs       : "No matter what the world throws at us—anxiety, fear, confusion, temptation—we have a choice on how to respond. We can either concede defeat, or put on God's armor and overcome.",
            unit_price  : 455,
            discount_p  : 25,
            qty         : 90,
            sold        : 50,
            review_rate : 4,
            main_image  : "/assets/img/spiritual/spiritual0027_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0027_0001.webp"
                },
                                            
            ]
        },
    
        {
            on_sale     : false,
            description : "Devotions from the Garden: Finding Peace and Rest from Your Hurried Life",
            specs       : "Is the garden your happy place? Does gardening give you peace? Devotions from the Garden takes you to that place where dewdrops settle and butterflies gather to witness the miracles of God's creation bloom and grow.",
            unit_price  : 600,
            discount_p  : 40,
            qty         : 90,
            sold        : 60,
            review_rate : 4,
            main_image  : "/assets/img/spiritual/spiritual0028_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0028_0001.webp"
                },
                                            
            ]
        },
    
        {
            on_sale     : false,
            description : "Captured By Grace: No One is Beyond the Reach of a Loving God",
            specs       : "Timely and encouraging words to initiate a fresh experience of God's grace.",
            unit_price  : 560,
            discount_p  : 30,
            qty         : 100,
            sold        : 50,
            review_rate : 4,
            main_image  : "/assets/img/spiritual/spiritual0029_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0029_0001.webp"
                },
                                            
            ]
        },
    
        {
            on_sale     : false,
            description : "Made to Crave: Satisfying Your Deepest Desire with God, Not Food",
            specs       : "What would happen if you started listening to your cravings instead of trying to silence them? If you’re tired of the same old messages of eat less and move more, this book is what you’ve been missing. You know “how to” get healthy… but now there’s finally a book to help you find your “want to”- the lasting emotional and spiritual motivation to meet your goals and stay healthy.",
            unit_price  : 700,
            discount_p  : 70,
            qty         : 85,
            sold        : 40,
            review_rate : 4,
            main_image  : "/assets/img/spiritual/spiritual0030_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0030_0001.webp"
                },
                                            
            ]
        },
    
        {
            on_sale     : false,
            description : "Sitting at the Feet of Rabbi Jesus: How the Jewishness of Jesus Can Transform Your Faith",
            specs       : "Have you ever wondered what it would be like to journey back to the first century and sit at the feet of Rabbi Jesus as one of his Jewish disciples? Join Ann Spangler and Lois Tverberg as they share a rare opportunity to know Jesus as his first disciples did.",
            unit_price  : 590,
            discount_p  : 100,
            qty         : 50,
            sold        : 30,
            review_rate : 5,
            main_image  : "/assets/img/spiritual/spiritual0031_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0031_0001.webp"
                },
                                            
            ]
        },
    
        {
            on_sale     : false,
            description : "Good Boundaries and Goodbyes: Loving Others Without Losing the Best of Who You Are",
            specs       : "Relationships are wonderful . . . until they're not. Join #1 New York Times bestselling author Lysa TerKeurst as she helps you stop the dysfunction of unhealthy relationships by showing you biblical ways to set boundaries--and, when necessary, say goodbye--without losing the best of who you are.",
            unit_price  : 1115,
            discount_p  : 300,
            qty         : 40,
            sold        : 30,
            review_rate : 5,
            main_image  : "/assets/img/spiritual/spiritual0032_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0032_0001.webp"
                },
                                            
            ]
        },
    
    
        {
            on_sale     : false,
            description : "It's Not Supposed to Be This Way: Finding Unexpected Strength When Disappointments Leave You Shattered",
            specs       : "New York Times bestselling author Lysa TerKeurst unveils her heart amid shattering circumstances and shows readers how to live assured when life doesn't turn out like they expected.",
            unit_price  : 1115,
            discount_p  : 300,
            qty         : 50,
            sold        : 40,
            review_rate : 5,
            main_image  : "/assets/img/spiritual/spiritual0033_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0033_0001.webp"
                },
                                            
            ]
    
        },
    
        {
            on_sale     : false,
            description : "All You Want to Know About Hell: Three Christian Views of God's Final Solution to the Problem of Sin",
            specs       : "It is an undeniable fact that the very concept of hell is shrouded in mystery. Is hell simply a place where sinners are sent to suffer for their sins, or is it much, much more than that?",
            unit_price  : 700,
            discount_p  : 210,
            qty         : 50,
            sold        : 40,
            review_rate : 0,
            main_image  : "/assets/img/spiritual/spiritual0034_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0034_0001.webp"
                },
                                            
            ]
    
        },
    
        {
            on_sale     : false,
            description : "Anxious for Nothing Bible Study Guide: Finding Calm in a Chaotic World",
            specs       : "The Anxious for Nothing Study Guide provides individuals and small groups with a roadmap for overcoming anxiety and finding lasting peace.",
            unit_price  : 455,
            discount_p  : 136,
            qty         : 50,
            sold        : 40,
            review_rate : 5,
            main_image  : "/assets/img/spiritual/spiritual0035_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0035_0001.webp"
                },
                                            
            ]
    
        },
    
        {
            on_sale     : false,
            description : "The Scandal of Forgiveness: Grace Put to the Test",
            specs       : "Forgiveness offers an alternative to an endless cycle of resentment and revenge, but do you really understand forgiveness? In The Scandal of Forgiveness bestselling author Philip Yancey will answer: What is forgiveness; Why is forgiveness so difficult; Why is forgiveness scandalous; and What does God have to do with forgiveness?",
            unit_price  : 525,
            discount_p  : 158,
            qty         : 50,
            sold        : 50,
            review_rate : 0,
            main_image  : "/assets/img/spiritual/spiritual0036_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0036_0001.webp"
                },
                                            
            ]
    
        },
    
        {
            on_sale     : false,
            description : "The Power to Change: Mastering the Habits That Matter Most",
            specs       : "Feeling stuck no matter how hard you try to make positive changes in your life? You can start living the life you want through the practical, biblical, and highly doable strategies in The Power to Change.",
            unit_price  : 1015,
            discount_p  : 305,
            qty         : 60,
            sold        : 50,
            review_rate : 5,
            main_image  : "/assets/img/spiritual/spiritual0037_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0037_0001.webp"
                },
                                            
            ]
    
        },
    
        {
            on_sale     : false,
            description : "100 Favorite Bible Verses",
            specs       : "Discover the life-changing power of Scripture with 100 of the best-loved Bible verses that bring encouragement, direction, insight, and hope for your life.",
            unit_price  : 360,
            discount_p  : 108,
            qty         : 95,
            sold        : 40,
            review_rate : 5,
            main_image  : "/assets/img/spiritual/spiritual0038_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0038_0001.webp"
                },
                                            
            ]
        },
    
        {
            on_sale     : false,
            description : "Springs in the Valley: 365 Daily Devotional Readings",
            specs       : "Springs in the Valley has been refreshing to the souls of believers for the past 60 years, and this updated price-conscious edition brings timeless messages of hope to existing fans and new readers alike.",
            unit_price  : 350,
            discount_p  : 105,
            qty         : 80,
            sold        : 20,
            review_rate : 5,
            main_image  : "/assets/img/spiritual/spiritual0039_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0039_0001.webp"
                },
                                            
            ]
        },
    
        {
            on_sale     : false,
            description : "The Secret Place of Thunder: Trading Our Need to Be Noticed for a Hidden Life with Christ",
            specs       : "Jesus teaches us to live, not for the eyes of others or even for ourselves, but in the secret place where our Father in heaven sees and rewards.",
            unit_price  : 700,
            discount_p  : 210,
            qty         : 60,
            sold        : 10,
            review_rate : 0,
            main_image  : "/assets/img/spiritual/spiritual0040_0001.webp",
            images      : [
    
                {
                    url : "/assets/img/spiritual/spiritual0040_0001.webp"
                },
                                            
            ]
        },
    
    ]  
    //

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
});
