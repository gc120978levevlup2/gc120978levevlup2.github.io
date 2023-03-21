import {                  
    user_is_logged_in,
    user_is_a,
                                    } from "/assets/model/local/login_user.js"

import { root_view   } from "/assets/view/js/sub/root_view.js"
import { menu_view   } from "/assets/view/js/sub/menu_view.js"
import { footer_view } from "/assets/view/js/sub/footer_view.js"


export const index_view = (data) => {
    
    let menu_options = ['home','login','buyer_signup','seller_signup']
    if (user_is_logged_in()){
        if (user_is_a("seller")){
            menu_options = ['home','seller_dashboard','seller_reg_item', 'seller_ord_item','logout']
        }else{
            menu_options = ['home','buyer_dashboard','buyer_checkout','logout']
        }
    }

    root_view()
    //console.log(menu_options)
    menu_view("home", menu_options, "header")
    footer_view("footer")

    $('#main-body-container').removeClass('container') // remove this to make the container visible
    $('#main-body').html(/*html*/`

        <div class="container bg-primary d-flex" style='overflow:hidden;min-height:calc(100vh - 60px)'>
          <div class="m-auto">
            <div class="container bg-primary" style="overflow:hidden;height:100%">
                <div class="row">
                    <div class="col d-lg-none" style="overflow:hidden">
                        <div class="mb-2 mbc5 mt-3 shadow rounded" style="overflow:hidden">
                        <div
                                    id="carouselExampleCaptions1"
                                    class="carousel bg-dark slide carousel-fade w-100"
                                    data-bs-ride="carousel"
                                    >
                                    <div class="carousel-indicators">
                                        <button
                                        type="button"
                                        data-bs-target="#carouselExampleCaptions1"
                                        data-bs-slide-to="0"
                                        class="active"
                                        aria-current="true"
                                        aria-label="Slide 1"
                                        ></button>
                                        <button
                                        type="button"
                                        data-bs-target="#carouselExampleCaptions1"
                                        data-bs-slide-to="1"
                                        aria-label="Slide 2"
                                        ></button>
                                        <button
                                        type="button"
                                        data-bs-target="#carouselExampleCaptions1"
                                        data-bs-slide-to="2"
                                        aria-label="Slide 3"
                                        ></button>
                                        <button
                                        type="button"
                                        data-bs-target="#carouselExampleCaptions1"
                                        data-bs-slide-to="3"
                                        aria-label="Slide 4"
                                        ></button>
                                        <button
                                        type="button"
                                        data-bs-target="#carouselExampleCaptions1"
                                        data-bs-slide-to="4"
                                        aria-label="Slide 5"
                                        ></button>
                                        <button
                                        type="button"
                                        data-bs-target="#carouselExampleCaptions1"
                                        data-bs-slide-to="5"
                                        aria-label="ySlide 6"
                                        ></button>
                                        <button
                                        type="button"
                                        data-bs-target="#carouselExampleCaptions1"
                                        data-bs-slide-to="6"
                                        aria-label="Slide 7"
                                        ></button>
                                        <button
                                        type="button"
                                        data-bs-target="#carouselExampleCaptions1"
                                        data-bs-slide-to="7"
                                        aria-label="Slide 8"
                                        ></button>
                                    </div>

                                    <div class="carousel-inner h-100 rounded">
                                        <div class="carousel-item active h-100 rounded" data-bs-interval="4000">
                                        <div
                                            class="bd-placeholder-img bd-placeholder-img-lg d-flex flex-fill justify-content-center align-content-center w-100 bg-primary bg-opacity-50  rounded"
                                            style="height: 100%"
                                        >
                                            <img
                                            class="hero-carousel rounded"
                                            width="100%"
                                            src="/assets/view/img/4m12.jpg"
                                            alt=""
                                            srcset=""
                                            />
                                        </div>
                                        <div
                                            class="carousel-caption d-block"
                                            style="
                                            background-color: rgb(20, 88, 100);
                                            opacity: 0.7;
                                            padding: 10px;
                                            "
                                        >
                                            <h3>The Management Team</h3>
                                        </div>
                                        </div>

                                        <div class="carousel-item h-100 rounded" data-bs-interval="3000">
                                        <div
                                            class="bd-placeholder-img bd-placeholder-img-lg d-flex flex-fill justify-content-center align-content-center w-100 bg-success bg-opacity-50 rounded"
                                            style="height: 100%"
                                        >
                                            <img
                                            class="hero-carousel"
                                            width="100%"
                                            src="/assets/view/img/femp1.jpg"
                                            alt=""
                                            srcset=""
                                            />
                                        </div>
                                        <div
                                            class="carousel-caption d-block rounded"
                                            style="
                                            background-color: rgb(20, 88, 100);
                                            opacity: 0.7;
                                            padding: 10px;
                                            "
                                        >
                                            <h3>We strive to build a happy working environment.</h3>
                                        </div>
                                        </div>

                                        <div class="carousel-item h-100" data-bs-interval="2000 rounded">
                                        <div
                                            class="bd-placeholder-img bd-placeholder-img-lg d-flex flex-fill justify-content-center align-content-center w-100 bg-danger bg-opacity-50 rounded"
                                            style="height: 100%"
                                        >
                                            <img
                                            class="hero-carousel rounded"
                                            width="100%"
                                            src="/assets/view/img/fdog-care.jpg"
                                            alt=""
                                            srcset=""
                                            />
                                        </div>
                                        <div
                                            class="carousel-caption d-block"
                                            style="
                                            background-color: rgb(20, 88, 100);
                                            opacity: 0.7;
                                            padding: 10px;
                                            "
                                        >
                                            <h3>We got pet friendly products.</h3>
                                        </div>
                                        </div>

                                        <div class="carousel-item h-100 rounded" data-bs-interval="2000">
                                        <div
                                            class="bd-placeholder-img bd-placeholder-img-lg d-flex flex-fill justify-content-center align-content-center w-100 bg-danger bg-opacity-50 rounded"
                                            style="height: 100%"
                                        >
                                            <img
                                            class="hero-carousel rounded"
                                            width="100%"
                                            src="/assets/view/img/fveg-harvest1.jpg"
                                            alt=""
                                            srcset=""
                                            />
                                        </div>
                                        <div
                                            class="carousel-caption d-block"
                                            style="
                                            background-color: rgb(20, 88, 100);
                                            opacity: 0.7;
                                            padding: 10px;
                                            "
                                        >
                                            <h3>We also got fresh farm products.</h3>
                                        </div>
                                        </div>


                                        <div class="carousel-item h-100 rounded" data-bs-interval="2000">
                                        <div
                                            class="bd-placeholder-img bd-placeholder-img-lg d-flex flex-fill justify-content-center align-content-center w-100 bg-danger bg-opacity-50 rounded"
                                            style="height: 100%"
                                        >
                                            <img
                                            class="hero-carousel rounded"
                                            width="100%"
                                            src="/assets/view/img/fword1.jpg"
                                            alt=""
                                            srcset=""
                                            />
                                        </div>
                                        <div
                                            class="carousel-caption d-block"
                                            style="
                                            background-color: rgb(20, 88, 100);
                                            opacity: 0.7;
                                            padding: 10px;
                                            "
                                        >
                                            <h3>The word of God is the strongest pillar.</h3>
                                        </div>
                                        </div>

                                        <div class="carousel-item h-100 rounded" data-bs-interval="2000">
                                        <div
                                            class="bd-placeholder-img bd-placeholder-img-lg d-flex flex-fill justify-content-center align-content-center w-100 bg-danger bg-opacity-50 rounded"
                                            style="height: 100%"
                                        >
                                            <img
                                            class="hero-carousel rounded"
                                            width="100%"
                                            src="/assets/view/img/fveg-harvest2.jpg"
                                            alt=""
                                            srcset=""
                                            />
                                        </div>
                                        <div
                                            class="carousel-caption d-block"
                                            style="
                                            background-color: rgb(20, 88, 100);
                                            opacity: 0.7;
                                            padding: 10px;
                                            "
                                        >
                                            <h3>We have straight from the farm products.</h3>
                                        </div>
                                        </div>

                                        <div class="carousel-item h-100 rounded" data-bs-interval="2000">
                                        <div
                                            class="bd-placeholder-img bd-placeholder-img-lg d-flex flex-fill justify-content-center align-content-center w-100 bg-danger bg-opacity-50 rounded"
                                            style="height: 100%"
                                        >
                                            <img
                                            class="hero-carousel rounded"
                                            width="100%"
                                            src="/assets/view/img/fdog-care2.jpg"
                                            alt=""
                                            srcset=""
                                            />
                                        </div>
                                        <div
                                            class="carousel-caption d-block"
                                            style="
                                            background-color: rgb(20, 88, 100);
                                            opacity: 0.7;
                                            padding: 10px;
                                            "
                                        >
                                            <h3>Your paw buddy is properly cared here.</h3>
                                        </div>
                                        </div>

                                        <div class="carousel-item h-100 rounded" data-bs-interval="2000">
                                        <div
                                            class="bd-placeholder-img bd-placeholder-img-lg d-flex flex-fill justify-content-center align-content-center w-100 bg-danger bg-opacity-50 rounded"
                                            style="height: 100%"
                                        >
                                            <img
                                            class="hero-carousel rounded"
                                            width="100%"
                                            src="/assets/view/img/fword2.jpg"
                                            alt=""
                                            srcset=""
                                            />
                                        </div>
                                        <div
                                            class="carousel-caption d-block"
                                            style="
                                            background-color: rgb(20, 88, 100);
                                            opacity: 0.7;
                                            padding: 10px;
                                            "
                                        >
                                            <h3>We help propagate the Word.</h3>
                                        </div>
                                        </div>

                                    </div>

                                    <button
                                        class="carousel-control-prev"
                                        type="button"
                                        data-bs-target="#carouselExampleCaptions1"
                                        data-bs-slide="prev"
                                    >
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>

                                    <button
                                        class="carousel-control-next"
                                        type="button"
                                        data-bs-target="#carouselExampleCaptions1"
                                        data-bs-slide="next"
                                    >
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>                    
                        </div>
                    </div>
                    <div class="col-lg-5 text-white">
                        <div class="mb-lg-5 h-100 d-flex align-items-center">
                            <div class="row">
                                <h1 class="text-center align-middle">
                                    <b><i>3-Corners Community Cooperative Inc</i></b>. 
                                </h1>
                                <h5 class="text-center align-middle">
                                    We are a community cooperative that champions <b><i>Animal Welfare</i></b>, promotes healthy <b><i>Fresh Harvest Food</i></b>, and adheres to <b><i>Spiritual Wellness</i></b>. 
                                </h5>
                                <div class="row mt-3 text-center">
                                    <div class="col-lg-4">
                                        <div class="index-button-logo">
                                            <a href="/assets/module_ds">
                                                <img class="rounded-circle shadow" width="80px" src="/assets/module_ds/paws1.jpg" alt="">
                                                <p>Community Helping Paws</p>
                                            </a>
                                        </div>
                                    </div>
                                
                                    <div class="col-lg-5">
                                        <div class="index-button-logo">
                                            <a href="/assets/module_rl">
                                                <div class="rounded bg-white p-1 mx-auto" style="overflow:hidden;max-width:200px">
                                                    <img class="rounded" width="100%" height="80px" src="/assets/module_rl/images/logo-no-background-removebg-preview.png" alt="">
                                                </div>
                                                <p class="mt-2">Local Harvest</p>
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-3">
                                        <div class="index-button-logo w-100">
                                            <a href="/assets/module_jac">
                                                <img class="rounded-circle shadow" width="80px" height="80px" src="assets/module_jac/img/psalms-logo.jpg" alt="">
                                                <p>Book of Psalms</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                    </div>
                   
                    <div class="col-lg-7 d-none d-lg-flex">
                        <div class="w-100 shadow rounded m-auto" style="overflow:hidden">
                             <!---
                            <div class="w-100">
                                <img width="100%" class="rounded" src="/assets/view/img/4m12.jpg" alt="">    
                            </div>  
                            --->   
                            
                                <div
                                    id="carouselExampleCaptions2"
                                    class="carousel bg-dark slide carousel-fade w-100 shadow"
                                    data-bs-ride="carousel"
                                    >
                                    <div class="carousel-indicators">
                                        <button
                                        type="button"
                                        data-bs-target="#carouselExampleCaptions2"
                                        data-bs-slide-to="0"
                                        class="active"
                                        aria-current="true"
                                        aria-label="Slide 1"
                                        ></button>
                                        <button
                                        type="button"
                                        data-bs-target="#carouselExampleCaptions2"
                                        data-bs-slide-to="1"
                                        aria-label="Slide 2"
                                        ></button>
                                        <button
                                        type="button"
                                        data-bs-target="#carouselExampleCaptions2"
                                        data-bs-slide-to="2"
                                        aria-label="Slide 3"
                                        ></button>
                                        <button
                                        type="button"
                                        data-bs-target="#carouselExampleCaptions2"
                                        data-bs-slide-to="3"
                                        aria-label="Slide 4"
                                        ></button>
                                        <button
                                        type="button"
                                        data-bs-target="#carouselExampleCaptions2"
                                        data-bs-slide-to="4"
                                        aria-label="Slide 5"
                                        ></button>
                                        <button
                                        type="button"
                                        data-bs-target="#carouselExampleCaptions2"
                                        data-bs-slide-to="5"
                                        aria-label="Slide 6"
                                        ></button>
                                        <button
                                        type="button"
                                        data-bs-target="#carouselExampleCaptions2"
                                        data-bs-slide-to="6"
                                        aria-label="Slide 7"
                                        ></button>
                                        <button
                                        type="button"
                                        data-bs-target="#carouselExampleCaptions2"
                                        data-bs-slide-to="7"
                                        aria-label="Slide 8"
                                        ></button>
                                    </div>

                                    <div class="carousel-inner h-100 rounded">
                                        <div class="carousel-item active h-100 rounded" data-bs-interval="4000">
                                        <div
                                            class="bd-placeholder-img bd-placeholder-img-lg d-flex flex-fill justify-content-center align-content-center w-100 bg-primary bg-opacity-50  rounded"
                                            style="height: 100%"
                                        >
                                            <img
                                            class="hero-carousel rounded"
                                            height="100%"
                                            src="/assets/view/img/4m12.jpg"
                                            alt=""
                                            srcset=""
                                            />
                                        </div>
                                        <div
                                            class="carousel-caption d-block"
                                            style="
                                            background-color: rgb(20, 88, 100);
                                            opacity: 0.7;
                                            padding: 10px;
                                            "
                                        >
                                            <h3>The Management Team</h3>
                                        </div>
                                        </div>

                                        <div class="carousel-item h-100 rounded" data-bs-interval="3000">
                                        <div
                                            class="bd-placeholder-img bd-placeholder-img-lg d-flex flex-fill justify-content-center align-content-center w-100 bg-success bg-opacity-50 rounded"
                                            style="height: 100%"
                                        >
                                            <img
                                            class="hero-carousel"
                                            height="100%"
                                            src="/assets/view/img/femp1.jpg"
                                            alt=""
                                            srcset=""
                                            />
                                        </div>
                                        <div
                                            class="carousel-caption d-block rounded"
                                            style="
                                            background-color: rgb(20, 88, 100);
                                            opacity: 0.7;
                                            padding: 10px;
                                            "
                                        >
                                            <h3>We strive to build a happy working environment.</h3>
                                        </div>
                                        </div>

                                        <div class="carousel-item h-100" data-bs-interval="2000 rounded">
                                        <div
                                            class="bd-placeholder-img bd-placeholder-img-lg d-flex flex-fill justify-content-center align-content-center w-100 bg-danger bg-opacity-50 rounded"
                                            style="height: 100%"
                                        >
                                            <img
                                            class="hero-carousel rounded"
                                            height="100%"
                                            src="/assets/view/img/fdog-care.jpg"
                                            alt=""
                                            srcset=""
                                            />
                                        </div>
                                        <div
                                            class="carousel-caption d-block"
                                            style="
                                            background-color: rgb(20, 88, 100);
                                            opacity: 0.7;
                                            padding: 10px;
                                            "
                                        >
                                            <h3>We got pet friendly products.</h3>
                                        </div>
                                        </div>

                                        <div class="carousel-item h-100 rounded" data-bs-interval="2000">
                                        <div
                                            class="bd-placeholder-img bd-placeholder-img-lg d-flex flex-fill justify-content-center align-content-center w-100 bg-danger bg-opacity-50 rounded"
                                            style="height: 100%"
                                        >
                                            <img
                                            class="hero-carousel rounded"
                                            height="100%"
                                            src="/assets/view/img/fveg-harvest1.jpg"
                                            alt=""
                                            srcset=""
                                            />
                                        </div>
                                        <div
                                            class="carousel-caption d-block"
                                            style="
                                            background-color: rgb(20, 88, 100);
                                            opacity: 0.7;
                                            padding: 10px;
                                            "
                                        >
                                            <h3>We also got fresh farm products.</h3>
                                        </div>
                                        </div>


                                        <div class="carousel-item h-100 rounded" data-bs-interval="2000">
                                        <div
                                            class="bd-placeholder-img bd-placeholder-img-lg d-flex flex-fill justify-content-center align-content-center w-100 bg-danger bg-opacity-50 rounded"
                                            style="height: 100%"
                                        >
                                            <img
                                            class="hero-carousel rounded"
                                            height="100%"
                                            src="/assets/view/img/fword1.jpg"
                                            alt=""
                                            srcset=""
                                            />
                                        </div>
                                        <div
                                            class="carousel-caption d-block"
                                            style="
                                            background-color: rgb(20, 88, 100);
                                            opacity: 0.7;
                                            padding: 10px;
                                            "
                                        >
                                            <h3>The word of God is the strongest pillar.</h3>
                                        </div>
                                        </div>

                                        <div class="carousel-item h-100 rounded" data-bs-interval="2000">
                                        <div
                                            class="bd-placeholder-img bd-placeholder-img-lg d-flex flex-fill justify-content-center align-content-center w-100 bg-danger bg-opacity-50 rounded"
                                            style="height: 100%"
                                        >
                                            <img
                                            class="hero-carousel rounded"
                                            height="100%"
                                            src="/assets/view/img/fveg-harvest2.jpg"
                                            alt=""
                                            srcset=""
                                            />
                                        </div>
                                        <div
                                            class="carousel-caption d-block"
                                            style="
                                            background-color: rgb(20, 88, 100);
                                            opacity: 0.7;
                                            padding: 10px;
                                            "
                                        >
                                            <h3>We have straight from the farm products.</h3>
                                        </div>
                                        </div>

                                        <div class="carousel-item h-100 rounded" data-bs-interval="2000">
                                        <div
                                            class="bd-placeholder-img bd-placeholder-img-lg d-flex flex-fill justify-content-center align-content-center w-100 bg-danger bg-opacity-50 rounded"
                                            style="height: 100%"
                                        >
                                            <img
                                            class="hero-carousel rounded"
                                            height="100%"
                                            src="/assets/view/img/fdog-care2.jpg"
                                            alt=""
                                            srcset=""
                                            />
                                        </div>
                                        <div
                                            class="carousel-caption d-block"
                                            style="
                                            background-color: rgb(20, 88, 100);
                                            opacity: 0.7;
                                            padding: 10px;
                                            "
                                        >
                                            <h3>Your paw buddy is properly cared here.</h3>
                                        </div>
                                        </div>

                                        <div class="carousel-item h-100 rounded" data-bs-interval="2000">
                                        <div
                                            class="bd-placeholder-img bd-placeholder-img-lg d-flex flex-fill justify-content-center align-content-center w-100 bg-danger bg-opacity-50 rounded"
                                            style="height: 100%"
                                        >
                                            <img
                                            class="hero-carousel rounded"
                                            height="100%"
                                            src="/assets/view/img/fword2.jpg"
                                            alt=""
                                            srcset=""
                                            />
                                        </div>
                                        <div
                                            class="carousel-caption d-block"
                                            style="
                                            background-color: rgb(20, 88, 100);
                                            opacity: 0.7;
                                            padding: 10px;
                                            "
                                        >
                                            <h3>We help propagate the Word.</h3>
                                        </div>
                                        </div>

                                    </div>

                                    <button
                                        class="carousel-control-prev"
                                        type="button"
                                        data-bs-target="#carouselExampleCaptions2"
                                        data-bs-slide="prev"
                                    >
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>

                                    <button
                                        class="carousel-control-next"
                                        type="button"
                                        data-bs-target="#carouselExampleCaptions2"
                                        data-bs-slide="next"
                                    >
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>


                        </div>
                    </div>
                    
                </div>
            </div>
          </div>
        </div>


        <div class="container bg-white inner d-flex" style="overflow:hidden;min-height:calc(100vh - 60px)">
          <div class="m-auto">
            <div class="container bg-white" style="overflow:hidden;height:100%">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="mb-2 mb-lg-3 mt-sm-3">
                            <div class="">
                                <div class="row mt-3 text-center g-2">
                                    <div class="row-lg-12 mb-5">
                                    </div>
                                    <div class="row-lg-12 mb-5">
                                        <div class="index-button-logo3">
                                            <a href="/assets/module_ds">
                                                <img class="rounded-circle shadow" width="80px" src="/assets/module_ds/paws1.jpg" alt="">
                                                <p>Community Helping Paws</p>
                                            </a>
                                        </div>
                                    </div>
                                
                                    <div class="row-lg-12 mb-5">
                                        <div class="index-button-logo3">
                                            <a href="/assets/module_rl">
                                                <div class="rounded bg-white p-1">
                                                    <img class="rounded" width="140px" height="80px" src="/assets/module_rl/images/logo-no-background-removebg-preview.png" alt="">
                                                </div>
                                                <p class="mt-2">Local Harvest</p>
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div class="row-lg-12 mb-5">
                                        <div class="index-button-logo3 w-100">
                                            <a href="/assets/module_jac">
                                                <img class="rounded-circle shadow" width="80px" height="80px" src="assets/module_jac/img/psalms-logo.jpg" alt="">
                                                <p>Book of Psalms</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>  
                            </div>                      
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="mb-lg-5 h-100 d-flex align-items-center">
                            <div class="row">
                                <h1 class="text-center align-middle">
                                    <b><i>Why we exist?</i></b>
                                </h1>
                                <h5 class="text-center align-middle text-secondary">
                                    We exist because we want to be able to help the community care for their pet buddies and to care for those unfortunate animals that nobody cares. 
                                </h5>
                                <h5 class="text-center align-middle text-secondary">
                                    We want also to raise awareness to the community regarding the importance of consuming fresh harvested products. We support the organic farmers and facilitates to market their fresh produce. 
                                </h5>
                                <h5 class="text-center align-middle text-secondary">
                                    We want also to promote the importance of the food for the soul which is the word of God. We support through The Book Of Psalms organization in spreading the word of the Lord. 
                                </h5>
                                <br>
                                <h1 class="text-center align-middle">
                                    <b><i>How do we operate?</i></b>
                                </h1>
                                <h5 class="text-center align-middle text-secondary">
                                    We facilitate in the sale of products that is related to our cause, and part of the income will fund the causes that we beleive can give meaning to our existence.
                                </h5>
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>

        <div class="container inner d-flex" style="overflow:hidden;background:rgba(250,250,250,0.8);min-height:calc(100vh - 60px)">
          <div class="m-auto">
            <div class="container" style="overflow:hidden;background:rgba(250,250,250,0.8);height:100%">
                <div class="row my-auto">
                    <div class="col-lg-7 d-lg-none">
                        <div class="mb-2 mb-lg-5 mt-sm-5 shadow rounded">
                            <div class="">
                                <img width="100%" class="rounded" src="/assets/view/img/join-us.webp" alt="">    
                            </div>                      
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="mb-lg-5 h-100 d-flex align-items-center">
                            <div class="row">
                                <h1 class="text-center align-middle">
                                    <b><i>Join Us!</i></b>
                                </h1>
                                <h5 class="text-center align-middle text-secondary">
                                    Please support our community causes and become a member consumer of 3-Corners Community Cooperative Inc. You will benefit from the myriad of products that are available on our store. 
                                </h5>
                                <div class="row mt-3 text-center">
                                    <div class="col-lg-12">
                                        <div class="index-button-logo2">
                                            <a href="/assets/view/pages/buyer_signup.html">
                                                <img class="rounded-circle shadow" width="80px" src="/assets/view/img/favicon.jpg" alt="">
                                                <p>Register Now</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                    </div>
                    <div class="col-lg-7 d-none d-lg-block">
                        <div class="mb-2 mb-lg-5 mt-sm-5 shadow rounded">
                            <div class="">
                                <img width="100%" class="rounded" src="/assets/view/img/join-us.webp" alt="">    
                            </div>                      
                        </div>
                    </div>
                </div>               
            </div>        
          </div>           
        </div>


        <div class="container bg-white inner d-flex" style="overflow:hidden;min-height:calc(100vh - 60px)">
          <div class="m-auto">
            <div class="container bg-white" style="overflow:hidden;height:100%">
                <br>
                <div class="row">
                <div class="col-lg-7">
                        <div class="mb-2 mb-lg-5 mt-sm-5 shadow rounded">
                            <div class="">
                                <img width="100%" class="rounded" src="/assets/view/img/sell-with-us.avif" alt="">    
                            </div>                      
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="mb-lg-5 h-100 d-flex align-items-center">
                            <div class="row">
                                <h1 class="text-center align-middle">
                                    <b><i>Sell with Us!</i></b>
                                </h1>
                                <h5 class="text-center align-middle text-secondary">
                                    Become a certified seller of 3-Corners Community Cooperative Inc. and access the buying powers of our member consumers 
                                </h5>
                                <div class="row mt-3 text-center">
                                    <div class="col-lg-12">
                                        <div class="index-button-logo2">
                                            <a href="/assets/view/pages/seller_signup.html">
                                                <img class="rounded-circle shadow" width="80px" src="/assets/view/img/favicon.jpg" alt="">
                                                <p>Become a Seller</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>        
          </div>
        </div>

        <div class="container inner d-flex" style="overflow:hidden;min-height:calc(100vh - 60px);background:rgba(250,250,250,0.8);">
          <div class="m-auto">
            <div class="container" style="overflow:hidden;height:100%;background:rgba(250,250,250,0.8);">
                <div class="row">
                    <h1 class="text-center">The Management Team</h1>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="mb-2 mt-sm-5">
                            <div class="row mt-3 text-center">
                                <div class="col-lg-3 mb-5">
                                    <div class="index-button-logo3">
                                        <a target="_blank" href="/assets/view/img/johnc-pic.jpg">
                                            <img class="rounded-circle shadow" width="180px" src="/assets/view/img/johnc-pic.jpg" alt="">
                                            <p> <h3>John Arsenio<br> Cabison </h3></p>
                                            <hr class="d-none d-lg-block">
                                            <p> <h5> CEO</h5></p>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-3 mb-5">
                                    <div class="index-button-logo3">
                                        <a target="_blank" href="/assets/view/img/davesaloria.jpg">
                                            <img class="rounded-circle shadow" width="180px" src="/assets/view/img/davesaloria.jpg" alt="">
                                            <p> <h3> Dave <br> Saloria </h3></p>
                                            <hr class="d-none d-lg-block">
                                            <p> <h5> VP for Finance  </h5></p>
                                        </a>
                                    </div>
                                </div>                            
                                <div class="col-lg-3 mb-5">
                                    <div class="index-button-logo3">
                                        <a target="_blank" href="/assets/view/img/reyL.jpg">
                                            <img class="rounded-circle shadow" width="180px" src="/assets/view/img/reyL.jpg" alt="">
                                            <p> <h3> Rey <br> Logdat </h3></p>
                                            <hr class="d-none d-lg-block">
                                            <p> <h5> VP for Marketing and Sales </h5></p>
                                        </a>
                                    </div>
                                </div>   
                                <div class="col-lg-3 mb-5">
                                    <div class="index-button-logo3">
                                        <a target="_blank" href="https://www.garrymcacho.com/">
                                            <img class="rounded-circle shadow" width="180px" src="/assets/view/img/me3.jpg" alt="">
                                            <p> <h3> Garry <br> Cacho </h3></p>
                                            <hr class="d-none d-lg-block">
                                            <p> <h5> VP for Operations  </h5></p>
                                        </a>
                                    </div>
                                </div>                                
                            </div>                      
                        </div>
                    </div>
                </div>
            </div>              
          </div>
        </div>
        


        <div
            id="carouselExampleCaptions"
            class="carousel bg-dark slide inner"
            data-bs-ride="carousel"
            style="min-height:calc(100vh - 60px)"
            >
            <div class="carousel-indicators">
                <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
                ></button>
                <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                ></button>
                <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                ></button>
                <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                aria-label="Slide 4"
                ></button>
            </div>

            <div class="carousel-inner h-100">
                <div class="carousel-item active h-100" data-bs-interval="2000">
                <div
                    class="bd-placeholder-img bd-placeholder-img-lg d-flex flex-fill justify-content-center align-content-center w-100 bg-primary bg-opacity-50"
                    style="height: 100%"
                >
                    <img
                    class="hero-carousel"
                    height="100%"
                    src="/assets/view/img/hero03.jpg"
                    alt=""
                    srcset=""
                    />
                </div>
                <div
                    class="carousel-caption d-block"
                    style="
                    background-color: rgb(20, 88, 100);
                    opacity: 0.7;
                    padding: 10px;
                    "
                >
                    <br />
                    <br />
                    <h3>The Ultimate Shopping Destination for the Masses</h3>
                    <br />
                    <hr />
                    <p>
                    myStore is the online store that offers everything you need in
                    one place. From fashion to electronics, home goods, and beyond,
                    we've got it all. Say goodbye to crowded stores and hello to the
                    ultimate shopping destination for the masses.
                    </p>
                </div>
                </div>

                <div class="carousel-item h-100" data-bs-interval="2000">
                <div
                    class="bd-placeholder-img bd-placeholder-img-lg d-flex flex-fill justify-content-center align-content-center w-100 bg-success bg-opacity-50"
                    style="height: 100%"
                >
                    <img
                    class="hero-carousel"
                    height="100%"
                    src="/assets/view/img/hero01.jpg"
                    alt=""
                    srcset=""
                    />
                </div>
                <div
                    class="carousel-caption d-block"
                    style="
                    background-color: rgb(20, 88, 100);
                    opacity: 0.7;
                    padding: 10px;
                    "
                >
                    <br />
                    <br />
                    <h3>Shop Without the Hassle</h3>
                    <br />
                    <hr />
                    <p>
                    Tired of dealing with long lines, traffic, and crowded stores?
                    Look no further than myStore - the online store for the masses.
                    Our easy-to-use website and fast delivery options make shopping
                    a breeze. Say goodbye to the hassle and shop at myStore today.
                    </p>
                </div>
                </div>

                <div class="carousel-item h-100" data-bs-interval="2000">
                <div
                    class="bd-placeholder-img bd-placeholder-img-lg d-flex flex-fill justify-content-center align-content-center w-100 bg-danger bg-opacity-50"
                    style="height: 100%"
                >
                    <img
                    class="hero-carousel"
                    height="100%"
                    src="/assets/view/img/hero02.jpg"
                    alt=""
                    srcset=""
                    />
                </div>
                <div
                    class="carousel-caption d-block"
                    style="
                    background-color: rgb(20, 88, 100);
                    opacity: 0.7;
                    padding: 10px;
                    "
                >
                    <br />
                    <br />
                    <h3>Discover the Ultimate Shopping Experience</h3>
                    <br />
                    <hr />
                    <p>
                    At myStore, we believe that shopping should be an enjoyable
                    experience, and that's exactly what we aim to provide. As an
                    online store for the masses, we offer a vast selection of
                    products across multiple categories.
                    </p>
                </div>
                </div>

                <div class="carousel-item h-100" data-bs-interval="2000">
                <div
                    class="bd-placeholder-img bd-placeholder-img-lg d-flex flex-fill justify-content-center align-content-center w-100 bg-danger bg-opacity-50"
                    style="height: 100%"
                >
                    <img
                    class="hero-carousel"
                    height="100%"
                    src="/assets/view/img/hero04.jpg"
                    alt=""
                    srcset=""
                    />
                </div>
                <div
                    class="carousel-caption d-block"
                    style="
                    background-color: rgb(20, 88, 100);
                    opacity: 0.7;
                    padding: 10px;
                    "
                >
                    <br />
                    <br />
                    <h3>Meet our most dedicated delivery team</h3>
                    <br />
                    <hr />
                    <p>
                    At myStore, we believe that having a reliable and dependable
                    system to handle product deliveries to our most valued clients
                    is most important part. We are very proud to have the best and
                    most driven personnel to handle your precious goodies.
                    </p>
                </div>
                </div>
            </div>

            <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>

            <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

    `/*html*/)
}