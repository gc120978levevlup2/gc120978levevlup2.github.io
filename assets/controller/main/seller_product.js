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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
            qty         : 1,
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
