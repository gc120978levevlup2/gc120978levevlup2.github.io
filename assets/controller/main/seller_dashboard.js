
// model
import {
          create_saved_category,
                                   } from "/assets/model/local/saved_category.js"
import {  
          create_category,
          read_categories,
          read_categories2,
          update_category,
          delete_category,
                                   } from "/assets/model/remote/categories.js"
import {  save_image               } from "/assets/model/remote/file.js"

// view
import { seller_dashboard_view     } from "/assets/view/js/main/seller_dashboard_view.js"

// controller
import { admin_new_cat_form_submit } from "/assets/controller/submit/admin_new_cat_form_submit.js"
import { admin_mod_cat_form_submit } from "/assets/controller/submit/admin_mod_cat_form_submit.js"
import {     
         handleImageFileUpload,
         makeid, 
                                   } from "/assets/controller/misc/misc.js"


seller_dashboard_view()

// images file picker for new category
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

// responds to submit button click
admin_new_cat_form_submit(() => {
    // put some loading animation messages here
   }, category => {
       create_category(category, categories => { // on successfully saved category
           //sconsole.log(categories)
           //window.location = "/assets/view/pages/seller_product.html"
           create_saved_category(categories[0])
           window.history.back()
       }, () => { // on failed to save category
           alert ('Failed to save category due to duplicate name.')
           window.history.back()
           //window.location = "/assets/view/pages/seller_product.html"
       })
   })

   //seller-category-list

   read_categories(null, categories => {
       $('#seller-category-list').html( 
            categories.map( (value, i) => (/*html*/`

                <div class="col mb-3" style="color: gray" >
                    <div class="card mx-auto" style="width:250px; height:315px">
                        <div class="mx-auto m-2 mb-0 p-1 shadow border border-2">
                            <img height="90" src="${value.image}" class="card-img-top1" alt="...">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${value.name}</h5>
                            <p class="card-text" style="height:45px">${value.desc}</p>
                            <div class="row g-1">
                                <div class="col-6">
                                    <button 
                                        type="button" 
                                        class="btn btn-outline-danger" 
                                        id="${i}"
                                        data-bs-toggle="modal" data-bs-target="#staticBackdrop2-${value.id}"
                                    >
                                        <i class="bi bi-eraser"></i>
                                        <br>
                                        Remove Category
                                    </button>
                                </div>
                                <div class="col-6">
                                    <button 
                                        type="button" 
                                        class="btn btn-outline-secondary"
                                        id="mod-${value.id}"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal-mod-cat"
                                        >
                                        <i class="bi bi-pen"></i>   
                                        <br>
                                        Modify Category
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Modal -->
                <div class="modal fade" id="staticBackdrop2-${value.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered  modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header bg-danger">
                                <h5 class="modal-title text-white" id="staticBackdropLabel">Are you sure you want to DELETE ${value.name} Category?</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                    <img
                                        width="100%"
                                        src="${value.image}"
                                        alt="xxx"
                                    />
                                    <br/>
                                    <br/>
                            </div>
                            <div class="modal-footer">
                                <button id="del-${value.id}" class="btn btn-outline-danger " data-bs-dismiss="modal">YES</button>
                            </div>
                        </div>
                    </div>
                </div> <!-- Modal End -->

            `/*html*/)).join('\n')
       )

       // button click event handler
       for (let value of categories){
            let del = document.getElementById(`del-${value.id}`)
            del.addEventListener("click", () => {
                let cat_id = del.id.replace('del-','')
                delete_category(cat_id, error => {
                    window.location.reload()
                })
            })

            let mod = document.getElementById(`mod-${value.id}`)
            mod.addEventListener("click", () => {
                let cat_id = mod.id.replace('mod-','')
                read_categories2 ( cat_id, categories => {
                    let category = categories[0]
                    $( '#id_2'             ).val(category.id   );
                    $( '#name_2'           ).val(category.name );
                    $( '#desc_2'           ).val(category.desc );
                    $( '#image_2'          ).val(category.image);
                    document.getElementById('category-image_2').src = `${category.image}`
                })
            })
       }

   } )

// images file picker for new category
let img2 = document.getElementById("image-filename1_2");
if (img2) {
    img2.addEventListener("change", (e) => {
        handleImageFileUpload(e, 400, resized_file => {
            // put some loading animation message here
            save_image(resized_file, makeid, file_path => {
                document.getElementById('image_2').value        = file_path;
                document.getElementById('category-image_2').src = `${file_path}`
                document.getElementById('category-image-div_2').classList.remove("d-none");
                img2.classList.add("is-valid");
                img2.classList.remove("is-invalid");
                // remove loading animation message here
            })
        });
    });
}

// responds to submit button click
admin_mod_cat_form_submit(() => {
    // put some loading animation messages here
   }, category => {
        update_category(category, categories => { // on successfully saved category
           //sconsole.log(categories)
           //window.location = "/assets/view/pages/seller_product.html"
           //alert(categories[0].id)
           create_saved_category(categories[0])
           window.history.back()
       }, () => { // on failed to save category
           alert ('Failed to save category due to duplicate name.')
           window.history.back()
           //window.location = "/assets/view/pages/seller_product.html"
       })
   })
