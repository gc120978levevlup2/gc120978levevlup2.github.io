import {                  
    user_is_logged_in,
    user_is_a,
                                    } from "/assets/model/local/login_user.js"

import { root_view   } from "/assets/view/js/sub/root_view.js"
import { menu_view   } from "/assets/view/js/sub/menu_view.js"
import { footer_view } from "/assets/view/js/sub/footer_view.js"


export const buyer_dashboard_view = (data) => {
    
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
    menu_view("buyer_dashboard", menu_options, "header")
    footer_view("footer")

    $('#main-body').html(/*html*/`
       
      <div class="container mb-3">
        <br>

        <div class="row">
            <div class="col-md-12"  style="height:35px">
                <h2 style="float:left;color:beige"><b><span class="badge bg-warning">
                    <i class="bi bi-x-diamond"></i>
                    Categories
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
       
    `/*html*/)
    
    
}