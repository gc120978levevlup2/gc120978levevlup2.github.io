import {                  
    user_is_logged_in,
    user_is_a,
                                    } from "/assets/model/local/login_user.js"

import { root_view   } from "/assets/view/js/sub/root_view.js"
import { menu_view   } from "/assets/view/js/sub/menu_view.js"
import { footer_view } from "/assets/view/js/sub/footer_view.js"


export const login_view = (data) => {
    
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
    menu_view("login", menu_options, "header")
    footer_view("footer")

    $('#main-body-container').removeClass('container') // remove this to make the container visible
    $('#main-body-container').addClass('login-bg')

    $('#main-body').html(/*html*/`
       
                    <!-- Modal -->
                    <div
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        class="modal fade"
                        id="loginModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="false"
                    >
                        <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header bg-primary">
                                <h5 class="modal-title text-white" id="exampleModalLabel">
                                    <i class="bi bi-lock"></i>
                                    Login
                                </h5>
                                <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onclick="window.location = '/';"
                                ></button>
                            </div>
                            <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="email1">
                                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                        Email:
                                    </label>
                                    <div class="input-group has-validation">
                                        <span
                                            class="input-group-text"
                                            id="inputGroupPrepend3"
                                            style="border: 2px solid rgb(198, 198, 198)"
                                        >@</span>
                                        <input
                                            type="email"
                                            class="form-control"
                                            id="email1"
                                            placeholder="Enter email"
                                            name="email1"
                                            required
                                        />
                                    </div>
                                    <div id="emailHelp" class="form-text">
                                        We'll never share your email with anyone else.
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label"
                                        >
                                        <i class="fa fa-lock" aria-hidden="true"></i>
                                        Password</label
                                    >
                                    <div class="input-group has-validation">
                                        <input
                                            type="password"
                                            name="password1"
                                            class="form-control"
                                            id="exampleInputPassword1"
                                        />
                                        <span
                                            class="input-group-text"
                                            id="inputGroupPrepend4"
                                        >
                                            <i class="bi bi-eye-slash" id="togglePassword"></i>
                                        </span>
                                    </div>
                                </div>
                                <a href="/assets/view/pages/buyer_signup.html"
                                ><span style="text-decoration: underline; color: blue"
                                    ><i>Sign Up?</i></span
                                ></a>
                                &nbsp;&nbsp;&nbsp;
                                <a href="/assets/view/pages/seller_signup.html"
                                ><span style="text-decoration: underline; color: blue"
                                    ><i>Seller?</i></span
                                ></a>
                                <button
                                type="submit"
                                class="btn btn-primary"
                                style="float: right"
                                >
                                <i class="fa fa-sign-in fa-lg" aria-hidden="true"></i>
                                Sign in
                                </button>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>

                    <!-- Modal -->
                    <div
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        class="modal fade"
                        id="msg-modal-dialog"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel2"
                        aria-hidden="false"
                    >
                        <div class="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable" >
                            <div class="modal-content">
                                <div class="modal-header bg-danger text-white  border border-3 border-bottom-0 border-danger">
                                    <h5 class="modal-title" id="exampleModalLabel2">
                                        <i class="bi bi-lock"></i>
                                        Login Status
                                    </h5>
                                    <button
                                        type="button"
                                        class="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div class="modal-body border border-3 border-top-0 border-danger">
                                    <br>
                                    <br>
                                    <h6 class="text-danger text-center">
                                        <b><i class="bi bi-x-circle"></i>
                                        <span id="msg-span"></span></b>
                                    </h6>
                                    <br>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
            
    `/*html*/)
    
    
}