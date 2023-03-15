// model
import {                  
    user_is_logged_in,
    user_is_a,
    read_user,
    create_user,
                                } from "/assets/model/local/login_user.js"
import { update_seller,         } from "/assets/model/remote/sellers.js"
import { update_user,           } from "/assets/model/remote/users.js"
import { save_image,            } from "/assets/model/remote/file.js"
// view
import { user_info_view         } from "/assets/view/js/main/user_info_view.js"

//controller
import { showModal,
         handleImageFileUpload,
         makeid,
                                } from "/assets/controller/misc/misc.js"
import { seller_mod_form_submit } from "/assets/controller/submit/seller_mod_form_submit.js"

function change_modal_title(new_title){
    $('#exampleModalLabel').html(`
        <i class="fa fa-id-card-o fa-lg" aria-hidden="true"></i>
        ${new_title}
    `)
}

user_info_view()

if (!user_is_logged_in()){
    window.location.href = '/assets/view/pages/login.html'
}

read_user( user_info => {
    document.getElementById('user-name'            ).innerHTML = user_info.name
    document.getElementById('user-contact-info'    ).innerHTML = user_info.contact
    document.getElementById('user-email-info'      ).innerHTML = user_info.email1
    document.getElementById('user-shipping-address').innerHTML = user_info.address 
    document.getElementById('user-image'           ).src       = `${user_info.img}`
})

$('#edit-user-btn').click(function (e) { 
    e.preventDefault();
    change_modal_title('Modify User Information')
    showModal('sellerEditModal')
    read_user( user_info => {
        for (let key in user_info){
            $(`#${key}`).val(user_info[key]);
        }
        document.getElementById('password1')  .value = window.atob(user_info.password1)
        document.getElementById('confirm_pwd').value = window.atob(user_info.password1)
        document.getElementById('img-view')   .src   = `${user_info["img"]}`
        password1Invalid = false
        password2Invalid = false
        validate_submit_button()
    })
    $('#id').addClass('d-none');
    $('#email1-div').addClass('d-none');
    $('#password1').addClass('d-none');
    $('#confirm_pwd').addClass('d-none');
    $('#img').addClass('d-none');
    $('#user-id-div').addClass('d-none');
    $('#user-data-div').removeClass('d-none');
});


$('#edit-pwd-btn').click(function (e) { 
    e.preventDefault();
    change_modal_title('Enter New User Password')
    showModal('sellerEditModal')
    read_user( user_info => {
        for (let key in user_info){
            $(`#${key}`).val(user_info[key]);
        }
        document.getElementById('password1')  .value = ""
        document.getElementById('confirm_pwd').value = ""
        document.getElementById('img-view')   .src   = `${user_info["img"]}`
        password1Invalid = true
        password2Invalid = true
        validate_submit_button()
    })
    $('#id').addClass('d-none');
    $('#email1-div').addClass('d-none');
    $('#password1').removeClass('d-none');
    $('#confirm_pwd').removeClass('d-none');
    $('#img').addClass('d-none');
    $('#user-id-div').removeClass('d-none');
    $('#user-data-div').addClass('d-none');
});

if (user_is_a('seller'))
    seller_mod_form_submit(()=>{
    }, (user_data) => {
        update_seller (user_data, sellers => {
            create_user(sellers[0])
            window.history.back()
        })
    })

if (user_is_a('buyer'))
    seller_mod_form_submit(()=>{
    }, (user_data) => {
        update_user (user_data, users => {
            create_user(users[0])
            window.history.back()
        })
    })

$('#img-selector').change(function (e) { 
    e.preventDefault();
    handleImageFileUpload(e , 400, file => {
        save_image (file, makeid, path => {
            document.getElementById('img-view').src = `${path}`
            $('#img').val(path);
        })
    })
});

// initialize the validation state
let password1Invalid = true
let password2Invalid = true

// if all is valid activate button
function validate_submit_button() {
    let signup_submit = document.getElementById("signup-submit");
    if (signup_submit) {
    signup_submit.disabled = true;
    signup_submit.classList.add("btn-secondary");
    signup_submit.classList.remove("btn-primary");
    if (
        !password1Invalid &&
        !password2Invalid
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