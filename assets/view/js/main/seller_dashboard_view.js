import {                  
    user_is_logged_in,
    user_is_a,
                                    } from "/assets/model/local/login_user.js"

import { root_view   } from "/assets/view/js/sub/root_view.js"
import { menu_view   } from "/assets/view/js/sub/menu_view.js"
import { footer_view } from "/assets/view/js/sub/footer_view.js"


export const seller_dashboard_view = (data) => {
    
    let menu_options = ['home','login','seller_signup']
    if (user_is_logged_in()){
        if (user_is_a("seller")){
            menu_options = ['home','seller_dashboard','seller_reg_item', 'seller_ord_item','logout']
        }else
        if (user_is_a("buyer")){
            menu_options = ['home','buyer_dashboard','buyer_checkout','logout']
        }
    }

    root_view()
    //console.log(menu_options)
    menu_view("seller_dashboard", menu_options, "header")
    footer_view("footer")



    $('#main-body').html(/*html*/`
       
            
      <br>
      <div class="container mb-3">
        <div class="row">
          <div class="col-md-12 m-3">
            <div class="row">
                <div class="col-sm-4">
                    <h2 style="float:left"><b>Categories</b></h2>                  
                </div>
                <div class="col-sm-8">
                    <button type="button" class="btn btn-outline-info me-4" style="float: right" data-bs-toggle="modal" data-bs-target="#exampleModal-add-cat">
                        <i class="bi bi-x-diamond"></i>
                        Add Category
                    </button>
                </div>
            </div>

            <!-- Add Category Modal -->
            <form>
                <div class="modal fade" id="exampleModal-add-cat" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header bg-info text-white">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">
                                    <i class="bi bi-postcard"></i>
                                    |
                                    New Products Category Registry Form
                                </h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row g-2">

                                    <div class="col-md-4 border border-end-2 border-start-0 border-top-0 border-bottom-0"  id="category-image-div">
                                        <div class="mx-auto w-75">
                                            <img
                                                width="100%"
                                                class="img-thumbnail"
                                                src="/assets/view/img/user.jpg"
                                                alt="please select a category image"
                                                srcset=""
                                                id="category-image"
                                            />
                                        </div>
                                    </div>

                                    <div class="col-md-8">
                                        <div class="form-floating col-md-12">
                                            <input type="file" class="form-control" id="image-filename1" placeholder="#"  required>
                                            <label for="first_name">
                                                <i class="bi bi-camera"></i>
                                                Picture
                                            </label>
                                        </div>  
                                        <input type="text" id="image" name="image" class="d-none"/>    
                                        <br> 
                                        <div class="form-floating col-md-12">
                                            <input type="text" class="form-control" id="name" name="name" placeholder="#" required>
                                            <label for="first_name">Category Name</label>
                                        </div> 
                                        <br> 
                                        <div class="form-floating col-md-12">
                                            <input type="text" class="form-control" id="desc" name="desc" placeholder="#" required>
                                            <label for="first_name">Description</label>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button class="btn btn-primary" type="submit">
                                    &nbsp;&nbsp;
                                    <i class="bi bi-database-add"></i>
                                    Save
                                    &nbsp;&nbsp;
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            <!-- Edit Category Modal -->
            <form>
                <div class="modal fade" id="exampleModal-mod-cat" tabindex="-1" aria-labelledby="exampleModalLabel-mod" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header bg-info text-white">
                                <h1 class="modal-title fs-5" id="exampleModalLabel-mod">
                                    <i class="bi bi-postcard"></i>
                                    |
                                    Modify Products Category Registry Form
                                </h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row g-2">

                                    <div class="col-md-4 border border-end-2 border-start-0 border-top-0 border-bottom-0"  id="category-image-div_2">
                                        <div class="mx-auto w-75">
                                            <img
                                                width="100%"
                                                class="img-thumbnail"
                                                src="/assets/view/img/user.jpg"
                                                alt="please select a category image"
                                                srcset=""
                                                id="category-image_2"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-8">
                                        <div class="form-floating col-md-12">
                                            <input type="file" class="form-control" id="image-filename1_2" placeholder="#">
                                            <label for="image-filename1-2">
                                                <i class="bi bi-camera"></i>
                                                Picture
                                            </label>
                                        </div>  
                                        <input type="text" id="image_2" name="image_2" class="d-none"/>  
                                        <input type="text" id="id_2"    name="id_2"    class="d-none">  
                                        <br> 
                                        <div class="form-floating col-md-12">
                                            <input type="text" class="form-control" id="name_2" name="name_2" placeholder="#" required>
                                            <label for="name_2">Category Name</label>
                                        </div> 
                                        <br> 
                                        <div class="form-floating col-md-12">
                                            <input type="text" class="form-control" id="desc_2" name="desc_2" placeholder="#" required>
                                            <label for="desc_2">Description</label>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button class="btn btn-primary" type="submit">
                                    &nbsp;&nbsp;
                                    <i class="bi bi-database-add"></i>
                                    Save
                                    &nbsp;&nbsp;
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>            

            </div>
        </div>
        <div class="row row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5" id="seller-category-list">
            <br><br><br><br><br><br><br><br><br><br><br><br>
        </div>
      </div>  

    `/*html*/)
    
    
}