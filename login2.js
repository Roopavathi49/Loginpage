function validate() {
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if (username ==null || username ==""){  
    alert("Name can't be blank");  
    return false;
}
if(password.length <8)
{
    alert("Password must be at least 6 characters long.");  
    return false;  
    
} 
else
{
    var str = "successfully login";
  var result = str.fontcolor("green");
  document.getElementById("demo").innerHTML = result;
}
var str = "successfully login";
var result = str.fontcolor("green");
document.getElementById("demo").innerHTML = result;
}




