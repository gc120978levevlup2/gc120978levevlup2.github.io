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
            description : "Guzekier Pet Dog Grooming Hammock Harness",
            specs       : "for Cats & Dogs, Dog Sling for Grooming, Dog Hammock Restraint Bag with Nail Clippers/Trimmer, Nail File, Pet",
            unit_price  : 900,
            discount_p  : 10,
            qty         : 100,
            sold        : 20,
            review_rate : 4,
            main_image  : "/assets/img/animal_welfare/anw0001_00001.jpg",
            images      : [
    
                {
                    url : "/assets/img/animal_welfare/anw0001_00001.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0001_00002.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0001_00003.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0001_00004.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0001_00005.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0001_00006.jpg"
                },
    
            ]
        },
    
        {
            on_sale     : true,
            description : "Bonve Pet Dog Nail Grinder",
            specs       : "Upgraded Cat Dog Nail Trimmers Super Quiet Dog Nail Clipper with 2 Grinding Wheels, USB Rechargeable Pet Nail Clippers for Small",
            unit_price  : 1000,
            discount_p  : 5,
            qty         : 200,
            sold        : 30,
            review_rate : 5,
            main_image  : "/assets/img/animal_welfare/anw0002_00001.jpg",
            images      : [
    
                {
                    url : "/assets/img/animal_welfare/anw0002_00001.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0002_00002.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0002_00003.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0002_00004.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0002_00005.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0002_00006.jpg"
                },
    
            ]
        },
    
        {
            on_sale     : false,
            description : "Vet’s Best Dog Toothbrush and Enzymatic Toothpaste Set",
            specs       : "Teeth Cleaning and Fresh Breath Kit with Dental Care Guide | Vet Formulated",
            unit_price  : 575,
            discount_p  : 15,
            qty         : 250,
            sold        : 100,
            review_rate : 5,
            main_image  : "/assets/img/animal_welfare/anw0003_00001.jpg",
            images      : [
    
                {
                    url : "/assets/img/animal_welfare/anw0003_00001.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0003_00002.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0003_00003.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0003_00004.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0003_00005.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0003_00006.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0003_00007.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0003_00008.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0003_00009.jpg"
                },
    
            ]
        },
    
        {
            on_sale     : false,
            description : "Plaque Banish",
            specs       : "100% Natural Plaque Off & Tartar Remover For Dogs & Cats | Freshen Breath For Dogs & Cats | 6.3oz (180g) | Support Healthy Gums",
            unit_price  : 850,
            discount_p  : 0,
            qty         : 100,
            sold        : 15,
            review_rate : 4,
            main_image  : "/assets/img/animal_welfare/anw0004_00001.jpg",
            images      : [
    
                {
                    url : "/assets/img/animal_welfare/anw0004_00001.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0004_00002.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0004_00003.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0004_00004.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0004_00005.jpg"
                },
              
            ]
        },
    
        {
            on_sale     : false,
            description : "Vet's Best Dental Care Finger Wipes",
            specs       : "Reduces Plaque & Freshens Breath | Teeth Cleaning Finger Wipes for Dogs & Cats | 50 Disposable Wipes",
            unit_price  : 700,
            discount_p  : 0,
            qty         : 100,
            sold        : 18,
            review_rate : 4,
            main_image  : "/assets/img/animal_welfare/anw0005_00001.jpg",
            images      : [
    
                {
                    url : "/assets/img/animal_welfare/anw0005_00001.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0005_00002.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0005_00003.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0005_00004.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0005_00005.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0005_00006.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0005_00007.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0005_00008.jpg"
                },
              
            ]
        },
    
        {
            on_sale     : true,
            description : "HOP Home of Paws Short Hair Dog Brush",
            specs       : "Pet Brushing Comb for Short Hair Coats – Detangling and Shedding Coat Hair Remover",
            unit_price  : 850,
            discount_p  : 10,
            qty         : 50,
            sold        : 35,
            review_rate : 5,
            main_image  : "/assets/img/animal_welfare/anw0006_00001.jpg",
            images      : [
    
                {
                    url : "/assets/img/animal_welfare/anw0006_00001.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0006_00002.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0006_00003.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0006_00004.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0006_00005.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0006_00006.jpg"
                },
    
            ]
        },
    
        {
            on_sale     : false,
            description : "HAWATOUR Dog Nail Clippers",
            specs       : "Professional Pet Nail Clipper & Trimmers with Safety Guard to Avoid Over Cutting, Grooming Razor with Nail File for Medium and Large Dog and Cat, Red",
            unit_price  : 400,
            discount_p  : 0,
            qty         : 110,
            sold        : 50,
            review_rate : 4,
            main_image  : "/assets/img/animal_welfare/anw0007_00001.jpg",
            images      : [
    
                {
                    url : "/assets/img/animal_welfare/anw0007_00001.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0007_00002.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0007_00003.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0007_00004.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0007_00005.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0007_00006.jpg"
                },
    
            ]
        },
    
        {
            on_sale     : false,
            description : "Wawash Pet Care",
            specs       : "Oatmeal & Coconut Dog Shampoo, Natural Dog Shampoo for Itchy & Dry Skin Relief. 16 Fl. Oz",
            unit_price  : 750,
            discount_p  : 0,
            qty         : 80,
            sold        : 20,
            review_rate : 4,
            main_image  : "/assets/img/animal_welfare/anw0008_00001.jpg",
            images      : [
    
                {
                    url : "/assets/img/animal_welfare/anw0008_00001.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0008_00002.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0008_00003.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0008_00004.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0008_00005.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0008_00006.jpg"
                },
    
            ]
        },
    
        {
            on_sale     : false,
            description : "WashBar Natural Dog Soap Bar",
            specs       : "Natural Dog Shampoo Bar and Dog Shampoo for Smelly Dogs with Sensitive Skin, Easier to Use Than Liquid Pet Shampoo with No Plastic Bottle Waste, 2-Pack",
            unit_price  : 850,
            discount_p  : 0,
            qty         : 80,
            sold        : 25,
            review_rate : 4,
            main_image  : "/assets/img/animal_welfare/anw0009_00001.jpg",
            images      : [
    
                {
                    url : "/assets/img/animal_welfare/anw0009_00001.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0009_00002.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0009_00003.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0009_00004.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0009_00005.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0009_00006.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw0009_00007.jpg"
                },
    
            ]
        },
    
        {
            on_sale     : false,
            description : "ROPO Dog Grooming Brush",
            specs       : "Pet Shampoo Bath Brush Soothing Massage Rubber Comb with Adjustable Ring Handle for Long Short Haired Dogs and Cats 2pcs",
            unit_price  : 400,
            discount_p  : 0,
            qty         : 100,
            sold        : 50,
            review_rate : 5,
            main_image  : "/assets/img/animal_welfare/anw00010_00001.jpg",
            images      : [
    
                {
                    url : "/assets/img/animal_welfare/anw00010_00001.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw00010_00002.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw00010_00003.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw00010_00004.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw00010_00005.jpg"
                },
                {
                    url : "/assets/img/animal_welfare/anw00010_00006.jpg"
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
