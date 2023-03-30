document.getElementById("gmc").innerHTML = "Welcome to Javascript DOM!";
document.getElementById("img").src = "TIGER.jpg"
document.getElementById("img").style.borderRadius = "50px";
document.getElementById("img").style.boxShadow = "4px 4px 4px grey";

const odumodu = document.getElementById('gmc').innerHTML;

document.getElementById('GoMyCode').innerHTML = odumodu;

//const x =document.getElementById("gmc").innerHTML;
//document.getElementById("GoMyCode").innerHTML = x;

//const x = document.getElementsByClassName("intro").innerHTML
document.getElementById("intro").innerHTML ="this is intro";


const x = document.getElementById("intro").innerHTML;
document.getElementById("outro").innerHTML = x +" ,this is outro now";

function validateForm(){
    let x = document.forms["form"]["userName"].value;
    if (x == ""){
        alert("username cannot be empty");
        return false;
    }
    let y = document.forms["form"]["email"].value;
    if (y == ""){
        alert("email cannot be empty");
        return false;
    }
    let z = document.forms["form"]["phoneNumber"].value;
    if (z == ""){
        alert("phone number cannot be empty")
        return false;
    }
    let h= document.forms["form"]["password"].value;
    if (h == ""){
        alert("password cannot be empty")
        return false;
    }
}