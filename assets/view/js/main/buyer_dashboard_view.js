import { user_is_logged_in, user_is_a } from "/assets/model/local/login_user.js"

import { root_view } from "/assets/view/js/sub/root_view.js"
import { menu_view } from "/assets/view/js/sub/menu_view.js"
import { footer_view } from "/assets/view/js/sub/footer_view.js"

export const buyer_dashboard_view = (data) => {
	let menu_options = ["home", "login", "seller_signup"]
	if (user_is_logged_in()) {
		if (user_is_a("seller")) {
			menu_options = [
				"home",
				"seller_dashboard",
				"seller_reg_item",
				"seller_ord_item",
				"logout",
			]
		} else if (user_is_a("buyer")) {
			menu_options = [
				"home",
				"buyer_dashboard",
				"buyer_checkout",
				"logout",
			]
		}
	}

	root_view()
	//console.log(menu_options)
	menu_view("buyer_dashboard", menu_options, "header")
	footer_view("footer")

	$("#main-body").html(/*html*/ `
       
      <div class="container mb-3">
        <br>
        
        <div class="row">
            <div class="col-md-12"  style="height:35px">
                <h2 style="float:left;color:beige"><b><span class="badge bg-warning">
                    <i class="bi bi-x-diamond"></i>
                    Select a Store
                </span> </b></h2>               
            </div>
            <div class="col-md-12">
                <hr>                
            </div>
        </div>
        <div class="row row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-3" id="buyer-stores-list">
            <br><br><br><br><br><br><br><br><br><br><br><br>
        </div>

        <div class="row">
            <div class="col-md-12"  style="height:35px">
                <h2 style="float:left;color:beige"><b><span class="badge bg-warning">
                    <i class="bi bi-x-diamond"></i>
                    Select a Category
                </span> </b></h2>               
            </div>
            <div class="col-md-12">
                <hr>                
            </div>
        </div>
        <div class="row row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-3" id="buyer-category-list">
            <br><br><br><br><br><br><br><br><br><br><br><br>
        </div>
        
        <div class="row">
            <div class="col-md-12"  style="height:35px">
                <h2 style="float:left;color:beige"><b><span class="badge bg-warning">
                    <i class="bi bi-cart3"></i>
                    myCart List
                </span> </b></h2>               
            </div>
            <div class="col-md-12">
                <hr>                
            </div>
        </div>
        <div class="row row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-3" id="buyer-products-cart-list">
            <br><br><br><br><br><br><br><br><br><br><br><br>
        </div>

        <div class="row">
            <div class="col-md-12"  style="height:35px">
                <h2 style="float:left;color:beige"><b><span class="badge bg-warning">
                    <i class="bi bi-airplane"></i>
                    Upcoming Shipments
                </span> </b></h2>               
            </div>
            <div class="col-md-12">
                <hr>                
            </div>
        </div>
        <div class="row row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-3" id="buyer-shipment-list">
            <br><br><br><br><br><br><br><br><br><br><br><br>
        </div>
      </div>  
      
    <!-- Edit Products Modal -->
    <form>
        <div class="modal fade" id="exampleModal-update-item" tabindex="-1" aria-labelledby="exampleModalLabel-update-item" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header bg-success text-white">
                        <h1 class="modal-title fs-5" id="exampleModalLabel-update-item">
                            <i class="bi bi-postcard"></i>
                            |
                            Order Status History
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"  onclick="window.location.reload()"></button>
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
                                    <div class="form-floating col-md-12 d-none">
                                        <input type="file" class="form-control" id="product-image-filename2" placeholder="#">
                                        <label for="product-image-filename2">
                                            <i class="bi bi-camera"></i>
                                            Add a Picture
                                        </label>
                                    </div>  
                                    <input type="text" id="id2" name="id2" class="d-none"/> 
                                    <input type="text" id="item_id2" name="item_id2" class="d-none"/>
                                    <input type="text" id="images2" name="images2" class="d-none" value="[]"/>  
                                    <input type="text" id="main_image2" name="main_image2" class="d-none"/>  
                                    <input type="text" id="seller_email2" name="seller_email2" class="d-none"/>  
                                    <input type="text" id="email2" name="email2" class="d-none"/> 
                                    <input type="text" id="order_date2" name="order_date2" class="d-none"/> 
                                    <input type="text" id="payment_method2" name="payment_method2" class="d-none"/> 
                                    <input type="text" id="price2" name="price2" class="d-none"/> 
                                    <input type="text" id="sold2" name="sold2" class="d-none"/> 
                                    <input type="text" id="status2" name="status2" class="d-none"/> 
                                    <input type="text" id="unit_price2" name="unit_price2" class="d-none"/>
                                    <input type="text" id="discount_p2" name="discount_p2" class="d-none"/>
                                    
                                    <div class="form-floating col-md-12 d-none">
                                        <select type="text" class="form-control" id="status_update2" name="status_update2" placeholder="#" required>
                                            <option>020. Seller Prepared the Item</option>
                                            <option>030. Seller Sent the Item to the Courier</option>
                                            <option>040. The Courier Processed the Item</option>
                                            <option>050. The Item have arrived in the locality</option>
                                            <option>060. The Item is ready for local delivery</option>
                                        </select>
                                        <label for="category_id2">Current Status Update</label>
                                    </div> 
                                    
                                    <h4 class="text-secondary"><i>Status History</i></h4>
                                    <div id="status-history-list" class="p-2 g-2"></div>
                                    <div class="form-floating col-md-12  d-none">
                                        <select type="text" class="form-control" id="category_id2" name="category_id2" placeholder="#" required>
                                            <option>Non-selected</option>
                                            <option>bd9262f3-3462-4504-a902-e22bc953da5f</option>
                                            <option>b62db881-ef42-47c9-9ac2-9e0725af95f2</option>
                                            <option>9bbfb3f1-e8f5-4350-9293-d38e325ec7d9</option>
                                        </select>
                                        <label for="category_id2">Category Name</label>
                                    </div> 
                                    <br> 
                                    <br> 
                                    <div class="row g-3 d-none">
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
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="window.location.reload()" >Close</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
       
    ` /*html*/)
}
