
// model
import { save_image           } from "/assets/model/remote/file.js"
import { 
         read_users,
         create_user,
                              } from "/assets/model/remote/users.js"

// view
import { buyer_signup_view   } from "/assets/view/js/main/buyer_signup_view.js"

// controller
import { 
    showModal,
    handleImageFileUpload,
    makeid,            
                              } from "/assets/controller/misc/misc.js"
import {
    buyer_new_form_submit,
                              } from "/assets/controller/submit/buyer_new_form_submit.js"


buyer_signup_view()
showModal('sellersignUpModal')
document.getElementById('exampleModalLabel').innerHTML =  /*html*/`<i class="fa fa-lock fa-lg" aria-hidden="true"></i> User Information Form Data`;

// initialize the validation state
let emailInvalid     = true
let password1Invalid = true
let password2Invalid = true
let nameInvalid      = true
let contactInvalid   = true
let addressInvalid   = true
let imgInvalid       = true

// if all is valid activate button
function validate_submit_button() {
    let signup_submit = document.getElementById("signup-submit");
    if (signup_submit) {
    signup_submit.disabled = true;
    signup_submit.classList.add("btn-secondary");
    signup_submit.classList.remove("btn-primary");
    if (
        !emailInvalid     &&
        !password1Invalid &&
        !password2Invalid &&
        !nameInvalid      &&
        !addressInvalid   &&
        !contactInvalid   &&
        !imgInvalid
    ) {
        signup_submit.disabled = false;
        signup_submit.classList.add("btn-primary");
        signup_submit.classList.remove("btn-secondary");
    }
    }
}
validate_submit_button();

function validate_values_of(
    elements,
    ret_callback,
    invalid_msg,
    reg_ex_pattern = undefined
) {
    let main_element   = elements[0];
    let error_element  = elements[1];
    let comp_element   = elements[2];
    let validate_value = (e) => {
    let val = e.target.value;
    let pass =
        reg_ex_pattern !== undefined
        ? String(val).match(reg_ex_pattern)
        : comp_element.value === main_element.value;
    if (pass) {
        main_element.classList.add("is-valid");
        main_element.classList.remove("is-invalid");
        error_element.innerHTML = /*html*/ `<span style="color:green">Valid</span>`;
        ret_callback(false);
        validate_submit_button();
    } else {
        main_element.classList.add("is-invalid");
        main_element.classList.remove("is-valid");
        error_element.innerHTML = /*html*/ `<span style="color:red">${invalid_msg}</span>`;
        ret_callback(true);
        validate_submit_button();
    }
    };
    main_element.addEventListener("change", validate_value);
    main_element.addEventListener("keyup", validate_value);
}

// validate email
let email_error = document.getElementById("email-error");
let email1 = document.getElementById("email1");
if (email1) {
    validate_values_of(
    [email1, email_error, undefined],
    (ret) => {
        emailInvalid = ret;
    },
    `Error: Invalid Email`,
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    );
}

// validate password1
let password1_error = document.getElementById("password1-error");
let password1 = document.getElementById("password1");
if (password1) {
    validate_values_of(
    [password1, password1_error, undefined],
    (ret) => {
        password1Invalid = ret;
    },
    `Error: Weak password. Should have min 8 chars, at least 1 up-case, 1 low-case, 1 numeric & 1 special char`,
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+~`|}{[\]:;/?.>,<])(?=.*[^\s]).{8,}$/
    );
}

// validate password1
let password2_error = document.getElementById("password2-error");
let password2 = document.getElementById("confirm_pwd");
if (password2) {
    validate_values_of(
    [password2, password2_error, password1],
    (ret) => {
        password2Invalid = ret;
    },
    `Error: Retyped password did not match`
    );
}

//
// validate name
let name_error = document.getElementById("name-error");
let name = document.getElementById("name");
if (name) {
    validate_values_of(
    [name, name_error, undefined],
    (ret) => {
        nameInvalid = ret;
    },
    `Error: Required Name`,
    /^\s*.+\s*$/
    );
}

// validate address
let address_error = document.getElementById("address-error");
let address = document.getElementById("address");
if (address) {
    validate_values_of(
    [address, address_error, undefined],
    (ret) => {
        addressInvalid = ret;
    },
    `Error: Required Address`,
    /^\s*.+\s*$/
    );
}

// validate contact
let contact_error = document.getElementById("contact-error");
let contact = document.getElementById("contact");
if (contact) {
    validate_values_of(
    [contact, contact_error, undefined],
    (ret) => {
        contactInvalid = ret;
    },
    `Error: Invalid Mobile Phone Number. ex 09993423450 or +639993423450 or 00639993423450`,
    /^\(?(0|\+63|0063)\)?[ -]?(9)\d{2}[ -]?\d{3}[ -]?\d{4}$/
    );
}

// images file picker
let img = document.getElementById("img");
if (img) {
    img.addEventListener("change", (e) => {
        handleImageFileUpload(e, 400, resized_file => {
            // put some loading animation message here
            save_image(resized_file, makeid, file_path => {
                document.getElementById('img-text').value = file_path;
                document.getElementById('img-view').src   = `${file_path}`
                imgInvalid                                = false;
                validate_submit_button()
                img.classList.add("is-valid");
                img.classList.remove("is-invalid");
                // remove loading animation message here
            })
        });
    });
}

// respond to submit button click event
buyer_new_form_submit(() => {
}, user => {
    read_users(user.email1, found_matching_sellers => {
        if (found_matching_sellers.length === 0){
            create_user(user, users => {
                if (users.length === 1) {
                    alert(`Successfully registered seller, ${users[0].email1}: ${users[0].name}.`)
                    window.location = "/assets/view/pages/login.html"
                }
            })
        }else{
            alert(`Failed to registered seller, ${user.email1} account already used by another seller.`)
            window.history.back()
        }
    })
})
