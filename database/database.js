async function Bookingdata(){

    let data= await fetch("http://localhost:3000/Booking_data")
    let fdata= await data.json()
    let tdata= fdata.map((e)=>`
    <tr>

     <td> ${e.id} </td>
    <td> ${e.movie}</td>
    <td> ${e.date} </td>
    <td> ${e.time} </td>
    <td> ${e.ticket} </td>

     <td> <button onclick="mydel('${e.id}')"> Delete</td>
      <td> <button onclick="myedit('${e.id}')">Edit</td>

      </tr>

    `).join("")

    let a= document.querySelector('#display')
    a.innerHTML=tdata
}
Bookingdata()

function mydel(id){
    fetch(`http://localhost:3000/Booking_data/${id}`,{
        method:'DELETE'
    })
    .then(r=>alert("deleted sucessfully"))
}


function insertdata(){
    let frmdata={
        movie: document.querySelector(".movie").value,
        date: document.querySelector(".date").value,
        time: document.querySelector(".time").value,
        ticket: document.querySelector(".ticket").value
    }

    fetch('http://localhost:3000/Booking_data',{
        method:'POST',
        headers:{
            'contect-type':'application/json'
        },
        body:JSON.stringify(frmdata)
    })
    .then(r=> alert("data inserted...."))

}
async function myedit(id){
    let edata= await fetch(`http://localhost:3000/Booking_data/${id}`)
    let fdata= await edata.json()

    let frm=`
    <div id="frm">
    <input type="text" value=" ${fdata.id}" id="id1"> <br> </br>
    <input type="text" value=" ${fdata.movie}" id="movie1"> <br> </br>
    <input type="text" value=" ${fdata.date}" id="date1"> <br> </br>
    <input type="text" value=" ${fdata.time}" id="time1"> <br> </br>
    <input type="text" value=" ${fdata.ticket}" id="ticket1"> <br> </br>
<input type="submit" onclick="finalupdate('${fdata.id}')">
</div>
    `
    document.querySelector('#showfrm').innerHTML=frm
}


function finalupdate(id){
    let final={
        id: document.querySelector('#id1').value,
        movie: document.querySelector('#movie1').value,
        date: document.querySelector('#date1').value,
        time: document.querySelector('#time1').value,
        ticket: document.querySelector('#ticket1').value
    }

fetch(`http://localhost:3000/Booking_data/${id}`,{
    method:"PUT",

    headers:{
        'contect-type':'application/json'
    },
    body:JSON.stringify(final)
})
.then(r=> alert("Update sucessfully"))
}