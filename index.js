function signup() {
    let user_signup = {
        sname: document.querySelector('#s_name').value,
        slname: document.querySelector('#s_lname').value,
        semail: document.querySelector('#s_email').value,
        spass: document.querySelector('#s_pass').value,
        scpass: document.querySelector('#s_cpass').value
    }

    localStorage.setItem("user_signup", JSON.stringify(user_signup))

}

let signup_data = JSON.parse(localStorage.getItem("user_signup"))
console.log(signup_data)


function login() {
    let user_login = {
        lemail: document.querySelector("#l_email").value,
        lpass: document.querySelector("#l_pass").value
    }

    if (signup_data.semail != user_login.lemail || signup_data.spass != user_login.lpass) {
        alert("User Not Found")
        return false
    }



}





// admin data

function admin() {

    let admin_email = document.querySelector("#admin_email").value
    let admin_pass = document.querySelector("#admin_pass").value

    if (admin_email != "admin@123") {
        alert("Enter Correct Email")
        return false
    }
    if (admin_pass != "123456") {
        alert("Enter currect Password")
        return false
    }

}






// booking code start 5555555555555555555555555555555


function booking() {


}


