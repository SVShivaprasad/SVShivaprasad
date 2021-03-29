var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var number = document.getElementById("number").value;
var num=/[0-9]/;
// var password = document.getElementById("password").value;
if (number.length == 10  && number.match(num)) {
    
    window.open("Otp.html");// alert("All type of validation has done on OnSubmit event.");

    return true;
}else {

    // window.open("index.html");
    alert("enter a valid number!");
    
    return false;
}



    

// Disabling fields after 3 attempts.

}


// && number.match(numbers)