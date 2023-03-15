
// model
import { 
    delete_user,      
                           } from "/assets/model/local/login_user.js"

// view
import { showModal         } from "/assets/controller/misc/misc.js"
import { logout_view       } from "/assets/view/js/main/logout_view.js"

logout_view()
showModal('logoutModal')
$('#sign-out-button').click(function (e) { 
    e.preventDefault();
    delete_user()
    window.location = "/assets/view/pages/login.html"
});