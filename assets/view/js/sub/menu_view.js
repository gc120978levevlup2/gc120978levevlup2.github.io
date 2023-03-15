
// model
import {                  
    read_user,
    user_is_logged_in,
} from "/assets/model/local/login_user.js"

// this view is used to dress up a header
// naming convention: objectName_elementTag_view
export const menu_view = (active_page, included_options, element_to_connect) => {
    let res_data_path = "/assets/view/img/user.jpg"
    let image1 = "d-lg-block"
    let image2 = ""
    if (user_is_logged_in()){
        read_user(user => {
            res_data_path = user.img
        })
    }else{
        image1 = ""
        image2 = "d-none"
    }
    const selection = {
        home             : '',
        login            : '',
        seller_signup    : '',
        logout           : '',
        seller_dashboard : '',
        seller_reg_item  : '',
        seller_ord_item  : '',
        seller_fnd_item  : '',
        seller_add_categ : '',
        buyer_signup     : '',
        buyer_dashboard  : '',
        buyer_checkout   : '',
    }
    const hide_sel = {
        home             : 'd-none',
        login            : 'd-none',
        seller_signup    : 'd-none',
        logout           : 'd-none',
        seller_dashboard : 'd-none',
        seller_reg_item  : 'd-none',
        seller_ord_item  : 'd-none',
        seller_fnd_item  : 'd-none',
        seller_add_categ : 'd-none',
        buyer_signup     : 'd-none',
        buyer_dashboard  : 'd-none',
        buyer_checkout   : 'd-none',
    }
    selection[active_page] = 'text-white fw-bold disabled'
    for (let item of included_options){
        hide_sel[item] = ''
    }
    //console.log(hide_sel)

    $(`#${element_to_connect}`).html(/*html*/ ` 

        <div class="container-fluid w-100">  
            <nav class="navbar navbar-expand-lg fixed-top  navbar-dark px-2" style="background-color: rgb(23,32,213,0.85);backdrop-filter: blur(5px);">
                    <a class="navbar-brand" href="/">
                        <img
                            height="40px"
                            src="/assets/view/img/favicon.jpg"
                            alt=""
                            srcset=""
                            class="rounded-circle"
                            id="main-icon"
                        />
                        <span style="font-weight: bolder; font-size: larger; color:aqua"> <b> myStore </b></span>
                    </a>
                    
                    <div class="btn-group">
                        <a class="navbar-toggler border border-0 me-2 ${image2}" style="width:50px" href="/assets/view/pages/user_info.html">
                            <img
                                height="40px"
                                width="40px"
                                src="${res_data_path}"
                                alt=""
                                srcset=""
                                class="rounded-circle  border border-3 border-primary-subtle"
                                id="user-icon2"
                            />
                        </a>
                        <button
                            class="navbar-toggler border border-0 p-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse"
                            aria-controls="navbarCollapse"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div class="collapse navbar-collapse navbar-expand-xl px-3" id="navbarCollapse">
                        <ul class="navbar-nav me-auto mb-2 mb-md-0">
                            <li class="nav-item ${hide_sel['home']}">
                                <a class="nav-link ${selection['home']}" href="/">
                                    Home
                                </a>
                            </li>
                            <li class="nav-item ${hide_sel['login']}">
                                <a class="nav-link ${selection['login']}"  href="/assets/view/pages/login.html">
                                    Login
                                </a>
                            </li>
                            <li class="nav-item ${hide_sel['buyer_signup']}">
                                <a class="nav-link ${selection['buyer_signup']}"  href="/assets/view/pages/buyer_signup.html">
                                    Sign Up
                                </a>
                            </li>
                            <li class="nav-item ${hide_sel['seller_signup']}">
                                <a class="nav-link ${selection['seller_signup']}"  href="/assets/view/pages/seller_signup.html">
                                    Seller
                                </a>
                            </li>
                            <li class="nav-item ${hide_sel['buyer_dashboard']}">
                                <a class="nav-link ${selection['buyer_dashboard']}"  href="/assets/view/pages/seller_dashboard.html">
                                    Dashboard
                                </a>
                            </li>
                            <li class="nav-item ${hide_sel['buyer_checkout']}">
                                <a class="nav-link ${selection['buyer_checkout']}"  href="/assets/view/pages/seller_product.html">
                                    Checkout
                                </a>
                            </li>
                            <li class="nav-item ${hide_sel['seller_dashboard']}">
                                <a class="nav-link ${selection['seller_dashboard']}"  href="/assets/view/pages/seller_dashboard.html">
                                    Dashboard
                                </a>
                            </li>
                            <li class="nav-item ${hide_sel['seller_reg_item']}">
                                <a class="nav-link ${selection['seller_reg_item']}"  href="/assets/view/pages/seller_product.html">
                                    Products
                                </a>
                            </li>
                            <li class="nav-item ${hide_sel['seller_ord_item']}">
                                <a class="nav-link ${selection['seller_ord_item']}"  href="/assets/view/pages/seller_signup.html">
                                    Orders
                                </a>
                            </li>
                            <li class="nav-item ${hide_sel['logout']}">
                                <a class="nav-link ${selection['logout']}"  href="/assets/view/pages/logout.html">
                                    Logout
                                </a>
                            </li>
                        </ul>
                        <hr>
                        <form class="d-flex me-2" role="search" action="/assets/view/pages/search.html">
                            <div class="input-group rounded-pill overflow-hidden border-end border-2" role="group">
                                <span class="input-group-text">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </span>
                                <input
                                    class="form-control border-3"
                                    type="search"
                                    name="search"
                                    placeholder="Enter a search term"
                                />
                                
                                <button class="btn btn-light border-3" type="submit">
                                    Search
                                </button>                              
                            </div>
                        </form>
                        <br>
                        <div class="d-none ${image1}">
                            <a style="width:50px" href="/assets/view/pages/user_info.html">
                                <img
                                    height="40px"
                                    width="40px"
                                    src="${res_data_path}"
                                    alt=""
                                    srcset=""
                                    class="rounded-circle  border border-3 border-primary-subtle"
                                    id="user-icon1"
                                />
                            </a>
                        </div>
            </nav>
        </div>
  
    `/*html*/)
}
  