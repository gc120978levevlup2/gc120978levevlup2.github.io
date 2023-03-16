import {                  
    user_is_logged_in,
    user_is_a,
                                    } from "/assets/model/local/login_user.js"

import { root_view   } from "/assets/view/js/sub/root_view.js"
import { menu_view   } from "/assets/view/js/sub/menu_view.js"
import { footer_view } from "/assets/view/js/sub/footer_view.js"


export const categories_view = (items) => {
    
    let menu_options = ['home','login','buyer_signup','seller_signup']
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
    menu_view("", menu_options, "header")
    footer_view("footer")

    $('#main-body').html(/*html*/`
       
      <br>
      <div class="container mb-3">
        <div class="row">
          <div class="col-md-12 m-3">
            <div class="row">
                <div class="col-sm-4">
                    <h2 style="float:left"><b>
                        <span id="category_name">Search Results</span> 
                    </b></h2>                  
                </div>
            </div>
            <div class="row row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5" id="user-search-list">
                 <br><br><br><br><br><br><br><br><br><br><br><br>
            </div>
          </div>
        </div>
      </div>
            
    `/*html*/)
    
    
}