
// model
import { read_sellers        } from "/assets/model/remote/sellers.js"
import { read_users           } from "/assets/model/remote/users.js"
import { 
    create_user,
    create_user_a_seller,
    create_user_a_buyer,
    user_is_a,        
                             } from "/assets/model/local/login_user.js"
// view
import { login_view          } from "/assets/view/js/main/login_view.js"

// controller
import { showModal           } from "/assets/controller/misc/misc.js"
import { login_form_submit   } from "/assets/controller/submit/login_form_submit.js"

// show login form
login_view()

// respond to login submit button click
login_form_submit(() => {
}, (data) => {
    read_sellers(data.email1, sellers => {
         if (sellers.length === 1){ // user is found
             if (sellers[0].password1 === data.password1){
                create_user(sellers[0])
                create_user_a_seller()
                window.location.href = '/assets/view/pages/seller_dashboard.html'
             }else{
                 window.location.href = `/assets/view/pages/login.html?msg=${("Error: password does not match")}`
             }
         }else{
            read_users(data.email1, users =>{
                if (users.length === 1){ // user is found
                    if (users[0].password1 === data.password1){
                        create_user(users[0])
                        create_user_a_buyer()
                        window.location.href = '/assets/view/pages/buyer_dashboard.html'
                    }else{
                        window.location.href = `/assets/view/pages/login.html?msg=${("Error: password does not match")}`
                    }
                }else{
                    window.location.href = `/assets/view/pages/login.html?msg=${("Error: user account does not exitst")}`
                }
            })
         } 
    })
 }, msg => {
    showModal("msg-modal-dialog")
    $('#msg-span').html(msg);
 })

 $("#togglePassword").mousedown(function () { 
    let password = document.getElementById('exampleInputPassword1')
    const type = 'text'
    document.getElementById('togglePassword').className = "bi bi-eye"
    password.setAttribute('type', type)
});

$("#togglePassword").mouseup(function () { 
    let password = document.getElementById('exampleInputPassword1')
    const type = 'password'
    document.getElementById('togglePassword').className = "bi bi-eye-slash"
    password.setAttribute('type', type)
});

