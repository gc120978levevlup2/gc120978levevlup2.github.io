import {                  
    user_is_logged_in,
    user_is_a,
                                    } from "/assets/model/local/login_user.js"

import { root_view   } from "/assets/view/js/sub/root_view.js"
import { menu_view   } from "/assets/view/js/sub/menu_view.js"
import { footer_view } from "/assets/view/js/sub/footer_view.js"


export const buyer_signup_view = (data) => {
    
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
    menu_view("buyer_signup", menu_options, "header")
    footer_view("footer")

    $('#main-body-container').removeClass('container') // remove this to make the container visible
    $('#main-body-container').addClass('login-bg')

    $('#main-body').html(/*html*/`
       
            <!-- Modal -->
            <form>
                <div
                    class="modal fade"
                    id="sellersignUpModal"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div
                        class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
                    >
                        <div class="modal-content">
                            <div class="modal-header bg-success">

                                <h5 class="modal-title text-light" id="exampleModalLabel">
                                    <i class="fa fa-id-card-o fa-lg" aria-hidden="true"></i>
                                    New User Information Form
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

                                <div class="form-group mb-3">
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
                                    <label id="email-error"></label>
                                </div>
                                <div class="form-group mb-3">
                                    <label for="password1"><i class="fa fa-lock" aria-hidden="true"></i> Password:</label>
                                    <input
                                        type="password"
                                        class="form-control"
                                        id="password1"
                                        placeholder="Enter password"
                                        name="password1"
                                        required
                                    />
                                    <label id="password1-error"></label>
                                </div>
                                <div class="form-group mb-3">
                                    <label for="confirm-pwd"><i class="fa fa-lock" aria-hidden="true"></i> Confirm Password:</label>
                                    <input
                                        type="password"
                                        class="form-control"
                                        id="confirm_pwd"
                                        placeholder="Confirm password"
                                        name="confirm_pwd"
                                        required
                                    />
                                    <label id="password2-error"></label>
                                </div>
                                <hr />
                                <br />
                                <div class="form-group mb-3">
                                    <label for="name"><i class="fa fa-user-o" aria-hidden="true"></i> Name:</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="name"
                                        placeholder="Enter name"
                                        name="name"
                                        required
                                    />
                                    <label id="name-error"></label>
                                </div>
                                <div class="form-group mb-3">
                                    <label for="contact"><i class="fa fa-phone" aria-hidden="true"></i> Mobile Phone Number</label>
                                    <input
                                            type="tel"
                                            class="form-control"
                                            id="contact"
                                            placeholder="Enter phone number"
                                            name="contact"
                                            required
                                        />
                                    <label id="contact-error"></label>
                                </div>
                                <div class="form-group mb-3">
                                    <label for="name"><i class="fa fa-map-marker" aria-hidden="true"></i> Address</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="address"
                                        placeholder="Enter address"
                                        name="address"
                                        required
                                    />
                                    <label id="address-error"></label>
                                </div>
                                <hr/>
                                <br />
                                <div class="form-group mb-3">
                                    <label for="name"><i class="fa fa-camera-retro" aria-hidden="true"></i> Picture</label>
                                    <input
                                        accept=".jpg"
                                        type="file"
                                        class="form-control mb-1"
                                        id="img"
                                        placeholder="Enter file image"
                                        required
                                    />
                                    <br>
                                    <div class="mx-auto img-thumbnail" style="width:60%">
                                        <img src="/assets/view/img/user.jpg" alt="Please upload your profile image." width="100%" id="img-view"/>
                                    </div>
                                    <input
                                        type="text"
                                        id="img-text"
                                        name="img"
                                        style="opacity:0"
                                        readonly
                                    />
                                </div>
                                <br />

                            </div>
                            <div class="modal-footer">

                                <button
                                    type="submit"
                                    class="btn btn-primary"
                                    style="float: right"
                                    id="signup-submit"
                                    >
                                    <i class="fa fa-floppy-o fa-lg" aria-hidden="true"></i>
                                    &nbsp;
                                    Submit
                                </button>
                                <br>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
       
    `/*html*/)
    
    
}