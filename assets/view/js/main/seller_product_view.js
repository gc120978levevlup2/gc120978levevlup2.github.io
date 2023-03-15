import {                  
    user_is_logged_in,
    user_is_a,
                                    } from "/assets/model/local/login_user.js"

import { root_view   } from "/assets/view/js/sub/root_view.js"
import { menu_view   } from "/assets/view/js/sub/menu_view.js"
import { footer_view } from "/assets/view/js/sub/footer_view.js"


export const seller_product_view = (data) => {
    
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
    menu_view("seller_reg_item", menu_options, "header")
    footer_view("footer")

    $('#main-body').html(/*html*/`
       
      <br>
      <div class="container mb-3">
        <div class="row">
          <div class="col-md-12 m-3">
            <div class="row">
                <div class="col-sm-4">
                    <h2 style="float:left"><b>myProducts</b></h2>                  
                </div>
                <div class="col-sm-8">
                    <button type="button" class="btn btn-outline-success me-4" style="float: right" data-bs-toggle="modal" data-bs-target="#exampleModal-add-item">
                        <i class="bi bi-clipboard-plus"></i>
                        Add Product
                    </button>
                    <button type="button" class="btn btn-outline-warning me-4 d-none" style="float: right" id="add_bulk_products">
                        <i class="bi bi-clipboard-plus"></i>
                        Add Bulk Products
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
                                                class="img-thumbnail rounded-circle"
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

            <!-- Add Products Modal -->
            <form>
                <div class="modal fade" id="exampleModal-add-item" tabindex="-1" aria-labelledby="exampleModalLabel-add-item" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header bg-success text-white">
                                <h1 class="modal-title fs-5" id="exampleModalLabel-add-item">
                                    <i class="bi bi-postcard"></i>
                                    |
                                    New Product Registry Form
                                </h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="container-fluid">
                                    <div class="row g-2">
                                        <div class="col-md-4 border border-end-2 border-start-0 border-top-0 border-bottom-0" id="product-image-div">
                                            <div class="mx-auto w-75">
                                                <img
                                                    width="100%"
                                                    class="img-thumbnail"
                                                    src="/assets/view/img/user.jpg"
                                                    alt="please select a category image"
                                                    srcset=""
                                                    id="product-image"
                                                />
                                            </div>
                                            <div class="mx-auto  mb-3" style="width: 15px">
                                                <button type="button" class="btn btn-outline-secondary border border-0" style="padding: 0" disabled> <i class="bi bi-trash"></i> </button>
                                            </div>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="form-floating col-md-12">
                                                <input type="file" class="form-control" id="product-image-filename1" placeholder="#"  required>
                                                <label for="first_name">
                                                    <i class="bi bi-camera"></i>
                                                    Add a Picture
                                                </label>
                                            </div>  
                                            <input type="text" id="images" name="images" class="d-none" value="[]"/>  
                                            <input type="text" id="main_image" name="main_image" class="d-none"/>  
                                            <input type="text" id="seller_email1" name="seller_email1" class="d-none"/>  
                                            <br> 
                                            <div class="form-floating col-md-12">
                                                <select type="text" class="form-control" id="category_id" name="category_id" placeholder="#" required>
                                                    <option>Non-selected</option>
                                                    <option>bd9262f3-3462-4504-a902-e22bc953da5f</option>
                                                    <option>b62db881-ef42-47c9-9ac2-9e0725af95f2</option>
                                                    <option>9bbfb3f1-e8f5-4350-9293-d38e325ec7d9</option>
                                                </select>
                                                <label for="category_id">Category Name</label>
                                            </div> 
                                            <br> 
                                            <div class="form-floating col-md-12">
                                                <input type="text" class="form-control" id="description" name="description" placeholder="#" required>
                                                <label for="description">Description/Name</label>
                                            </div>  
                                            <br> 
                                            <div class="form-floating col-md-12">
                                                <textarea type="text" class="form-control" id="specs" name="specs" placeholder="#" required></textarea>
                                                <label for="specs">Product Specification</label>
                                            </div> 
                                            <br> 
                                            <div class="row g-3">
                                                <div class="col-sm-4">
                                                    <div class="form-floating">
                                                        <input type="number" class="form-control" id="unit_price" name="unit_price" placeholder="#" required>
                                                        <label for="unit_price">Unit Price PhP</label>
                                                    </div>                                         
                                                </div>

                                                <div class="col-sm-4">
                                                    <div class="form-floating">
                                                        <input type="number" class="form-control" id="discount_p" name="discount_p" placeholder="#" required>
                                                        <label for="discount_p">Discount (%)</label>
                                                    </div>                                         
                                                </div>

                                                <div class="col-md-4">
                                                    <input class="form-check-input" type="checkbox" id="on_sale" name="on_sale">
                                                    <label for="on_sale">On Sale</label>                                      
                                                    <br>
                                                    <input class="form-check-input" type="checkbox" id="on_stop_sell" name="on_stop_sell">
                                                    <label for="on_stop_sell">Stop Selling</label>                                      
                                                </div>
                                            </div>
                                            <br>
                                            <div class="row g-3">
                                                <div class="col-sm-4">
                                                    <div class="form-floating">
                                                        <input type="number" class="form-control" id="min_qty" name="min_qty" placeholder="#" required>
                                                        <label for="min_qty">Threshold Qty</label>
                                                    </div>                                         
                                                </div>

                                                <div class="col-sm-4">
                                                    <div class="form-floating">
                                                        <input type="number" class="form-control" id="qty" name="qty" placeholder="#" required>
                                                        <label for="qty">Actual On-hand Qty</label>
                                                    </div>                                         
                                                </div>

                                                <div class="col-md-4">
                                                    <div class="form-floating">
                                                        <input type="number" class="form-control" id="sold" name="sold" placeholder="#" required>
                                                        <label for="sold">Sold Qty</label>
                                                    </div>                                      
                                                </div>
                                            </div>
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

            <!-- Edit Products Modal -->
            <form>
                <div class="modal fade" id="exampleModal-update-item" tabindex="-1" aria-labelledby="exampleModalLabel-update-item" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header bg-success text-white">
                                <h1 class="modal-title fs-5" id="exampleModalLabel-update-item">
                                    <i class="bi bi-postcard"></i>
                                    |
                                    Update Product Form
                                </h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="container-fluid">
                                    <div class="row g-2">
                                        <div class="col-md-4 border border-end-2 border-start-0 border-top-0 border-bottom-0" id="product-image-div-2">
                                            <div class="mx-auto w-75">
                                                <img
                                                    width="100%"
                                                    class="img-thumbnail"
                                                    src="/assets/view/img/user.jpg"
                                                    alt="please select a category image"
                                                    srcset=""
                                                    id="product-image"
                                                />
                                            </div>
                                            <div class="mx-auto  mb-3" style="width: 15px">
                                                <button type="button" class="btn btn-outline-secondary border border-0" style="padding: 0" disabled> <i class="bi bi-trash"></i> </button>
                                            </div>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="form-floating col-md-12">
                                                <input type="file" class="form-control" id="product-image-filename2" placeholder="#">
                                                <label for="product-image-filename2">
                                                    <i class="bi bi-camera"></i>
                                                    Add a Picture
                                                </label>
                                            </div>  
                                            <input type="text" id="id2" name="id2" class="d-none"/> 
                                            <input type="text" id="images2" name="images2" class="d-none" value="[]"/>  
                                            <input type="text" id="main_image2" name="main_image2" class="d-none"/>  
                                            <input type="text" id="seller_email2" name="seller_email2" class="d-none"/>  
                                            <br> 
                                            <div class="form-floating col-md-12">
                                                <select type="text" class="form-control" id="category_id2" name="category_id2" placeholder="#" required>
                                                    <option>Non-selected</option>
                                                    <option>bd9262f3-3462-4504-a902-e22bc953da5f</option>
                                                    <option>b62db881-ef42-47c9-9ac2-9e0725af95f2</option>
                                                    <option>9bbfb3f1-e8f5-4350-9293-d38e325ec7d9</option>
                                                </select>
                                                <label for="category_id2">Category Name</label>
                                            </div> 
                                            <br> 
                                            <div class="form-floating col-md-12">
                                                <input type="text" class="form-control" id="description2" name="description2" placeholder="#" required>
                                                <label for="description2">Description/Name</label>
                                            </div>  
                                            <br> 
                                            <div class="form-floating col-md-12">
                                                <textarea type="text" class="form-control" id="specs2" name="specs2" placeholder="#" required></textarea>
                                                <label for="specs2">Product Specification</label>
                                            </div> 
                                            <br> 
                                            <div class="row g-3">
                                                <div class="col-sm-4">
                                                    <div class="form-floating">
                                                        <input type="number" class="form-control" id="unit_price2" name="unit_price2" placeholder="#" required>
                                                        <label for="unit_price2">Unit Price PhP</label>
                                                    </div>                                         
                                                </div>

                                                <div class="col-sm-4">
                                                    <div class="form-floating">
                                                        <input type="number" class="form-control" id="discount_p2" name="discount_p2" placeholder="#" required>
                                                        <label for="discount_p2">Discount (%)</label>
                                                    </div>                                         
                                                </div>

                                                <div class="col-md-4">
                                                    <input class="form-check-input" type="checkbox" id="on_sale2" name="on_sale2">
                                                    <label for="on_sale2">On Sale</label>                                      
                                                    <br>
                                                    <input class="form-check-input" type="checkbox" id="on_stop_sell2" name="on_stop_sell2">
                                                    <label for="on_stop_sell2">Stop Selling</label>                                      
                                                </div>
                                            </div>
                                            <br>
                                            <div class="row g-3">
                                                <div class="col-sm-4">
                                                    <div class="form-floating">
                                                        <input type="number" class="form-control" id="min_qty2" name="min_qty2" placeholder="#" required>
                                                        <label for="min_qty2">Threshold Qty</label>
                                                    </div>                                         
                                                </div>

                                                <div class="col-sm-4">
                                                    <div class="form-floating">
                                                        <input type="number" class="form-control" id="qty2" name="qty2" placeholder="#" required>
                                                        <label for="qty2">Actual On-hand Qty</label>
                                                    </div>                                         
                                                </div>

                                                <div class="col-md-4">
                                                    <div class="form-floating">
                                                        <input type="number" class="form-control" id="sold2" name="sold2" placeholder="#" required>
                                                        <label for="sold2">Sold Qty</label>
                                                    </div>                                      
                                                </div>
                                            </div>
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
        <div class="row row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-3" id="seller-products-list">
            <br><br><br><br><br><br><br><br><br><br><br><br>
        </div>
      </div>              
       
    `/*html*/)
    
    
}