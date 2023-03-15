
// this view is used to dress up a footer
// naming convention: objectName_elementTag_view
export const footer_view = (element_to_connect) => {

    $(`#${element_to_connect}`).html(/*html*/ ` 
          
        <footer
            class="text-white bg-secondary"
            style="height: 350px; padding-top: 45px;z-index: 100;"
        >
            <div class="container-fluid bg-secondary">
                <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-5">
                        <h1>
                        <img
                            height="80px"
                            src="/assets/view/img/favicon.jpg"
                            alt=""
                            srcset=""
                            class="rounded-circle"
                        />
                        <span style="font-weight: bolder; font-size: larger; color:aqua"> <b> myStore </b></span>
                        </h1>
                        <p>Address: 123 Main Street, Anytown, Philippines 12345</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: <a href="mailto:info@mystore.com">info@mystore.com</a></p>
                    </div>
                    <div class="col-md-3">
                        <h4>Follow us</h4>
                        <ul class="list-inline social-buttons">
                        <li class="list-inline-item">
                            <a target="_blank" href="https://web.facebook.com/?_rdc=1&_rdr">
                            <i class="fa fa-facebook fa-2x" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a target="_blank" href="https://twitter.com/">
                            <i class="fa fa-twitter fa-2x" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a target="_blank" href="https://www.instagram.com/reel/CombGXNJXNe/?utm_source=ig_embed&ig_rid=35feef06-6252-4d27-b1bb-bc242803d05a">
                            <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a target="_blank" href="https://www.linkedin.com/">
                            <i class="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a target="_blank" href="https://www.twitch.tv/">
                            <i class="fa fa-twitch fa-2x" aria-hidden="true"></i>
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div class="col-md-3">
                        <h4>Links</h4>
                        <ul class="list-unstyled">
                        <li><a href="retpol.html">Return & Refund Policy</a></li>
                        <li><a href="privpol.html">Privacy Policy</a></li>
                        <li><a href="tos.html">Terms of Service</a></li>
                        <li><a href="aboutus.html">About Us</a></li>
                        <li><a target="_blank" href="https://www.garrymcacho.com">About the Author</a></li>
                        </ul>
                    </div>
                </div>
                <br />
                <div class="copyright text-center">
                Copyright &copy; 2023 myStore. All rights reserved.
                </div>
                <br />
                <br />
            </div>
        </footer>
  
    `/*html*/)
};
  