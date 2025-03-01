function signup(){
    let sname= document.querySelector('#s_name').value
    let slname= document.querySelector('#s_lname').value
    let semail= document.querySelector('#s_email').value
    let spass= document.querySelector('#s_pass').value
    let scpass= document.querySelector('#s_cpass').value

    localStorage.setItem("frist name",sname)
    localStorage.setItem("last name",slname)
let email=    localStorage.setItem("s_email",semail)
let password=  localStorage.setItem("s_password",spass)
    localStorage.setItem("s_conform_password",scpass)
    return false


}

function login(){
    let lemail=document.querySelector("#l_email").value
     let lpass=document.querySelector("#l_pass").value


   

    

  let semail=JSON.parse(localStorage.getItem("s_email"))
  let spass=JSON.parse(localStorage.getItem("s_password"))

  alert(semail);
  
  
  if (lemail != semail || lpass!=spass) {
    alert("user undefiend")
    return false
}
  
  

}

// admin data

function admin(){
    let e=document.querySelector("#admin_email").value
    let p=document.querySelector("#admin_pass").value

    localStorage.setItem("Admin Email")
}




// booking code start 5555555555555555555555555555555


function booking(){
   

}