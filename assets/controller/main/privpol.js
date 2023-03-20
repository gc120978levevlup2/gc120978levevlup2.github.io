import {                  
    user_is_logged_in,
    user_is_a,
                                    } from "/assets/model/local/login_user.js"

import { root_view   } from "/assets/view/js/sub/root_view.js"
import { menu_view   } from "/assets/view/js/sub/menu_view.js"
import { footer_view } from "/assets/view/js/sub/footer_view.js"

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
    console.log(menu_options)
    menu_view("", menu_options, "header")
    footer_view("footer")

    $('#main-body-container').html(/*html*/`
       
    <div class="container" style="font-size: larger; line-height: 40px">
      <div class="row">
        <div class="col-sm-5 d-none d-lg-block" id="myScrollspy">
          <div class="list-group">
            <a class="list-group-item list-group-item-action" href="#section1"
              >Introduction</a
            >
            <a class="list-group-item list-group-item-action" href="#section2"
              >Information Sharing and Disclosure</a
            >
            <a class="list-group-item list-group-item-action" href="#section3"
              >Security</a
            >
          </div>
        </div>
        <div class="col-sm-7">
          <div id="section1">
            <br>
            <br>
            <h1>Introduction</h1>
              <p>
                This Privacy Policy outlines how <b>3CCCi</b> collects, uses,
                and protects the personal information of its users. This policy
                applies to all products and services offered by <b>3CCCi</b>.
              </p>

              <h2>Information Collection and Use</h2>
              <p>
                <b>3CCCi</b> collects personal information when you register
                on our site, place an order, subscribe to our newsletter,
                respond to a survey, or fill out a form. This information may
                include, but is not limited to, your name, email address,
                mailing address, phone number, and payment information.
              </p>
              <p>
                The information we collect is used to improve the services and
                products we offer, to process transactions, to send periodic
                emails, and to better understand your needs and interests.
              </p>
          </div>
          <div id="section2">
              <br>
              <hr>
              <br>
              <h2>Information Sharing and Disclosure</h2>
              <p>
                <b>3CCCi</b> does not sell, trade, or rent your personal
                information to others. We may share your information with
                trusted third parties who assist us in operating our website,
                conducting our business, or servicing you, so long as those
                parties agree to keep this information confidential.
              </p>
              <p>
                <b>3CCCi</b> may also release your information when we believe
                release is appropriate to comply with the law, enforce our site
                policies, or protect the rights, property, or safety of
                <b>3CCCi</b>, our users, or others.
              </p>
              <h2>Data Retention</h2>
              <p>
                <b>3CCCi</b> will retain your personal information only for as
                long as is necessary to fulfill the purpose(s) for which it was
                collected. After this time, the information will be deleted or
                anonymized.
              </p>
          </div>
          <div id="section3">
              <br>
              <hr>
              <br>
              <h2>Security</h2>
              <p>
                <b>3CCCi</b> takes the security of your personal information
                very seriously. We implement appropriate technical and
                organizational measures to protect your personal information
                from unauthorized access, disclosure, alteration, or
                destruction.
              </p>

              <h2>Changes to this Privacy Policy</h2>
              <p>
                <b>3CCCi</b> reserves the right to make changes to this
                Privacy Policy at any time. We will notify you of any changes by
                posting the new Privacy Policy on this page.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy,
                please contact us at
                <b><a href="mailto:info@3CCCi.com">info@3CCCi.com</a></b
                >.
              </p>
              <br />
              <br />
          </div>
        </div>
      </div>
    </div>                        
            
    `/*html*/)
    