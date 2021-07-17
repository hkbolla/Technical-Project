function myFun(){
var user= document.getElementById('user').value;
var password= document.getElementById('password').value;
var captcha= document.getElementById('captcha').value;

if(password.length<10 || password.length>16)
{
document.getElementById("text").innerHTML="The password must be more than 10 and less than 16 characters long.";
document.getElementById("password").style.borderColor = "red";
} else if(user=="krishna.18BCE7318@vitap.ac.in" && password=="bollahaikrishna" && captcha=="18BCE7318" )
{
alert("Welcome");
} else if(captcha!="18BCE7318") {
document.getElementById("text").innerHTML="captcha is invalid.";
document.getElementById("captcha").style.borderColor = "red";
} else {
alert("User name or password is incorrect");
}
}