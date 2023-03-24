import { user_is_logged_in, user_is_a } from "/assets/model/local/login_user.js"

import { root_view } from "/assets/view/js/sub/root_view.js"
import { menu_view } from "/assets/view/js/sub/menu_view.js"
import { footer_view } from "/assets/view/js/sub/footer_view.js"

export const buyer_checkout_view = (data) => {
	let menu_options = ["home", "login", "seller_signup"]
	if (user_is_logged_in()) {
		if (user_is_a("seller")) {
			menu_options = [
				"home",
				"seller_dashboard",
				"seller_reg_item",
				"seller_ord_item",
				"logout",
			]
		} else if (user_is_a("buyer")) {
			menu_options = [
				"home",
				"buyer_dashboard",
				"buyer_checkout",
				"logout",
			]
		}
	}

	root_view()
	//console.log(menu_options)
	menu_view("buyer_checkout", menu_options, "header")
	footer_view("footer")

	$("#main-body").html(/*html*/ `
       
       <main>
  <br />
  <br />
  <section id="checkout">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-7 col-xl-8">
          <div class="container">
            <h2 class="mb-3">
              <i><b>Checkout Details</b></i>
            </h2>
            <hr />
            <div class="accordion mb-5" id="accordionPanelsStayOpenExample">
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
                    <i
                      class="fa fa-user fa-2x text-danger"
                      aria-hidden="true"
                    ></i>
                    Your Identity
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div class="accordion-body">
                    <strong id="user-name"
                      >This is the first item's accordion body.</strong
                    >
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
                    <strong id="user-contact-info"
                      >This is the first item's accordion body.</strong
                    >
                    <br />
                    <span class="badge rounded-pill bg-primary"
                      >Email&nbsp;</span
                    >
                    <strong id="user-email-info"
                      >This is the first item's accordion body.</strong
                    >
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
                    <span class="badge rounded-pill bg-warning text-dark"
                      >Home</span
                    >
                    <strong id="user-shipping-address"
                      >This is the first item's accordion body.</strong
                    >
                  </div>
                </div>
              </div>
            </div>
            <h2 class="mb-3">
              <span class="text-primary position-relative">
                <i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
              </span>
              <i><b>Shopping Cart Items</b></i>
            </h2>
            <hr />
            <div class="row row-cols-lg-1 row-cols-xl-2" id="shopping-cart-list"></div>
          </div>
        </div>
        <div class="col-md-6 col-lg-5 col-xl-4">
          <div class="bd-checkout" style="background-color:beige;color:grey">
            <div class="mb-3">
              <h4>Payent Method</h4>
            </div>

            <div class="form-check mb-3">
              <input
                class="form-check-input"
                type="radio"
                name="payment_method"
                id="payByCC"
              />
              <label class="form-check-label" for="payByCC">
                Pay by Credit/Debit Card
              </label>
              <div class="mb-3">
                <label for="cardNumber" class="form-label"
                  >Card Number</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="input credit card number"
                />
              </div>
              <div class="mb-3">
                <label for="cardMonthYear" class="form-label"
                  >Validity Month/Year</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="cardMonthYear"
                  name="cardMonthYear"
                  placeholder="input month/year"
                />
              </div>
              <div class="mb-3">
                <label for="cardCVV" class="form-label">CVV</label>
                <input
                  type="text"
                  class="form-control"
                  id="cardCVV"
                  name="cardCVV"
                  placeholder="input CVV"
                />
              </div>
            </div>
            <div class="form-check mb-3">
              <input
                class="form-check-input"
                type="radio"
                name="payment_method"
                id="payByCOD"
                checked
              />
              <label class="form-check-label" for="payByCOD">
                Cash On Delivery
              </label>
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Voucher</label
              >
              <input
                type="text"
                class="form-control"
                id="voucher-code-input"
                name="voucher-code-input"
                placeholder="Enter Voucher Code"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Additional Instructions</label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="mb-3">
              <br />
              <h4>Order Summary</h4>
              <div>
                <div class="row mb-3">
                  <div class="col-7">
                    <label class="form-label">Sub Total</label>
                  </div>
                  <div class="col-1">
                    <h6>₱</h6>
                  </div>
                  <div class="col-4">
                    <h6 style="float: right" id="checkout-sub-total">
                      -423947.00
                    </h6>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-7">
                    <label class="form-label">Shipping Fee</label>
                  </div>
                  <div class="col-1">
                    <h6>₱</h6>
                  </div>
                  <div class="col-4">
                    <h6 style="float: right" id="checkout-shipping-fee">
                      -423947.00
                    </h6>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-7">
                    <label class="form-label">Shipping Fee Discount</label>
                  </div>
                  <div class="col-1">
                    <h6>₱</h6>
                  </div>
                  <div class="col-4">
                    <h6
                      style="float: right"
                      id="checkout-shipping-fee-discount"
                    >
                      -423947.00
                    </h6>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-7">
                    <label class="form-label">Voucher Discount</label>
                  </div>
                  <div class="col-1">
                    <h6>₱</h6>
                  </div>
                  <div class="col-4">
                    <h6 style="float: right" id="voucher-discount">
                      -0.00
                    </h6>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-7">
                    <label class="form-label">Cause Fund Allot.</label>
                  </div>
                  <div class="col-1">
                    <h6>₱</h6>
                  </div>
                  <div class="col-4">
                    <h6 style="float: right" id="cause-fund">
                      -0.00
                    </h6>
                  </div>
                </div>
                <hr />
                <div class="row mb-3">
                  <div class="col-6">
                    <label class="form-label">Grand Total</label>
                  </div>
                  <div class="col-1">
                    <h4>₱</h4>
                  </div>
                  <div class="col-5 text-warning">
                    <h4 style="float: right" id="checkout-grand-total">
                      -423947.00
                    </h4>
                  </div>
                </div>
              </div>
              <br />
              <button
                type="submit"
                class="btn btn-outline-danger"
                style="width: 100%"
                id="place-order-btn"
                data-bs-toggle="modal"
                data-bs-target="#success-added-order"
              >
                <h5>Place Order</h5>
              </button>

              <!-- Modal -->
              <div
                class="modal fade"
                id="success-added-order"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div
                  class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
                >
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel">
                        Order Status
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        onclick="window.location = '/assets/view/pages/buyer_dashboard.html#buyer-shipment-list'"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <h2 class="text-success">
                        <i
                          class="fa fa-check-circle fa-lg"
                          aria-hidden="true"
                        ></i>
                        Successfully placed order!
                      </h2>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-danger"
                        data-bs-dismiss="modal"
                        onclick="window.location = '/assets/view/pages/buyer_dashboard.html#buyer-shipment-list'"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>          
       
    ` /*html*/)
}
