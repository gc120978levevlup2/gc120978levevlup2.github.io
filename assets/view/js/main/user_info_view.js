import {                  
    user_is_logged_in,
    user_is_a,
                                    } from "/assets/model/local/login_user.js"

import { root_view   } from "/assets/view/js/sub/root_view.js"
import { menu_view   } from "/assets/view/js/sub/menu_view.js"
import { footer_view } from "/assets/view/js/sub/footer_view.js"


export const user_info_view = (data) => {
    
    let menu_options = ['home','login','seller_signup']
    if (user_is_logged_in()){
        if (user_is_a("seller")){
            menu_options = ['home','seller_dashboard','seller_reg_item', 'seller_ord_item','logout']
        }else{
            menu_options = ['home','buyer_dashboard','buyer_checkout','logout']
        }
    }

    root_view()
    //console.log(menu_options)
    menu_view("", menu_options, "header")
    footer_view("footer")

    $('#main-body').html(/*html*/`

        <div class="container mb-3">
            <div class="row">
                <div class="col-md-12 p-3">
    
                    <section>
                        <div class="row">
                            <div class="col-sm-4">
                                <h2 class="mb-1 mt-3" style="float: left">
                                    &nbsp;&nbsp;
                                    <i><b>myProfile</b></i>
                                </h2>
                            </div>       
                            <div class="col-sm-8">
                                <button type="button" class="btn btn-outline-danger m-3" style="float: right" id="edit-pwd-btn">
                                    <i class="bi bi-lock"></i>
                                    Edit Password
                                </button>
                                <button type="button" class="btn btn-outline-success m-3" style="float: right" id="edit-user-btn">
                                    <i class="bi bi-pencil-square"></i>
                                    Edit User Info
                                </button>
                            </div>                        
                        </div>
                        <div
                            class="accordion mb-12"
                            id="accordionPanelsStayOpenExample"
                          >

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingOne1">
                                    <button
                                        class="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseOne1"
                                        aria-expanded="true"
                                        aria-controls="panelsStayOpen-collapseOne1"
                                    >
                                        <i class="fa fa-picture-o fa-2x text-success" aria-hidden="true"></i>
                                        &nbsp;
                                        Picture
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapseOne1"
                                    class="accordion-collapse collapse show"
                                    aria-labelledby="panelsStayOpen-headingOne1"
                                >
                                    <div class="accordion-body">
                                        <img
                                            class=" img-thumbnail"
                                            height="350px"
                                            src="./assets/img/users/image0001.jpg"
                                            alt=""
                                            srcset=""
                                            id="user-image"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                    <button
                                    class="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseOne"
                                    aria-expanded="true"
                                    aria-controls="panelsStayOpen-collapseOne"
                                    >
                                    <i class="fa fa-user fa-2x text-danger" aria-hidden="true"></i>
                                    &nbsp;
                                    Name
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapseOne"
                                    class="accordion-collapse collapse show"
                                    aria-labelledby="panelsStayOpen-headingOne"
                                    >
                                    <div class="accordion-body">

                                        <strong id="user-name"></strong>

                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                    <button
                                    class="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseTwo"
                                    aria-expanded="true"
                                    aria-controls="panelsStayOpen-collapseTwo"
                                    >
                                    <i class="fa fa-address-book fa-2x text-secondary" aria-hidden="true"></i>
                                    &nbsp;
                                    Contact Information
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapseTwo"
                                    class="accordion-collapse collapse show"
                                    aria-labelledby="panelsStayOpen-headingTwo"
                                  >
                                    <div class="accordion-body">

                                        <span class="badge rounded-pill bg-success">Phone</span>
                                        <strong id="user-contact-info"></strong>
                                        <br/>
                                        <span class="badge rounded-pill bg-primary">Email&nbsp;</span>
                                        <strong id="user-email-info"></strong>
                                        <br/>

                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2
                                    class="accordion-header"
                                    id="panelsStayOpen-headingThree"
                                    >
                                    <button
                                        class="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseThree"
                                        aria-expanded="true"
                                        aria-controls="panelsStayOpen-collapseThree"
                                      >
                                        Shipping Address
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapseThree"
                                    class="accordion-collapse collapse show"
                                    aria-labelledby="panelsStayOpen-headingThree"
                                  >
                                    <div class="accordion-body">
                                        <span class="badge rounded-pill bg-warning text-dark">Home</span>
                                        <strong id="user-shipping-address"></strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Modal -->
                    <form>
                        <div
                            class="modal fade"
                            id="sellerEditModal"
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
                                            Modify Seller Information Form
                                        </h5>
                                        <button
                                            type="button"
                                            class="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        ></button>

                                    </div>
                                    <div class="modal-body">
                                        <div id="user-id-div">
                                            <input type="text" name="id" id="id"/>
                                            <div class="form-group mb-3" id="email1-div">
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
                                        </div>
                                        <div id="user-data-div">
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
                                                    id="img-selector"
                                                    placeholder="Enter file image"
                                                />
                                                <br>
                                                <div class="mx-auto img-thumbnail" style="width:60%">
                                                    <img src="" alt="Please upload your profile image." width="100%" id="img-view"/>
                                                </div>
                                                <input
                                                    type="text"
                                                    id="img"
                                                    name="img"
                                                    style="opacity:1"
                                                    class="d-none1"
                                                />
                                            </div>
                                            <br />
                                        </div>
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

                </div>
            </div>
        </div>

    `/*html*/)
}