import {                  
    user_is_logged_in,
    user_is_a,
                                    } from "/assets/model/local/login_user.js"

import { root_view   } from "/assets/view/js/sub/root_view.js"
import { menu_view   } from "/assets/view/js/sub/menu_view.js"
import { footer_view } from "/assets/view/js/sub/footer_view.js"


export const logout_view = (data) => {
    
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
    menu_view("logout", menu_options, "header")
    footer_view("footer")

    $('#main-body-container').removeClass('container') // remove this to make the container visible
    $('#main-body-container').addClass('login-bg')

    $('#main-body').html(/*html*/`
       
        <!-- Modal -->
            <div
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                class="modal fade"
                id="logoutModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="false"
            >
                <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header bg-warning-subtle">
                        <h5 class="modal-title" id="exampleModalLabel">
                            <i class="bi bi-lock"></i>
                            Logging Out?
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onclick="window.history.back()"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <br>
                        <br>
                        <div class="row mx-auto" style="height: 60px; width: 300px">
                            <div class="col-1">
                                <h1><i class="bi bi-signpost-split"></i></h1>
                            </div>
                            <div class="col-11">
                                <h6 class="text-danger mt-3">
                                    <span id="msgSpan" >Do you wanted really to sign out?</span></b>
                                </h6>
                            </div>
                        </div>
                        <br>
                        <br>
                        <button
                            id="sign-out-button"
                            class="btn btn-danger"
                            style="float: right"
                            >
                            <i class="bi bi-box-arrow-right"></i>
                            Sign Out
                        </button>

                    </div>
                </div>
                </div>
            </div>
            
    `/*html*/)
    
    
}