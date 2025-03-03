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


   

    

  let semail=parent.json(localStorage.getItem("s_email"))
  let spass=(localStorage.getItem("s_password"))

  
  
  
//   if (lemail != semail && lpass!=spass) {
//     alert("user undefiend")
//     return false
// }

if(lemail!=semail){
    alert("Enter Correct Email")
    return false
}
if(lpass!=spass){
    alert("Enter Correct Password")
    return false
}
  
 return false 

}

// admin data

function admin(){
   
    let admin_email=document.querySelector("#admin_email").value
    let admin_pass=document.querySelector("#admin_pass").value

    if(admin_email!="admin@123"){
        alert("Enter Correct Email")
        return false
    }
    if(admin_pass!="123456"){
        alert("Enter currect Password")
        return false
    }
    
}






// booking code start 5555555555555555555555555555555


function booking(){
   

}


