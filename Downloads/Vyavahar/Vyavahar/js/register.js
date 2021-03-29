function Validation() { 
    var letters = /^[A-Za-z]+$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var num=/[0-9]/;
    var email= document.RegForm.email.value;

    var email =  
        document.forms["RegForm"]["email"]; 
  
    var address1 =  
        document.forms["RegForm"]["address1"]; 
        var address2 =  
        document.forms["RegForm"]["address2"]; 
    var shop=
    document.forms["RegForm"]["shop"]; 
   
    var city=
    document.forms["RegForm"]["city"]; 
    var state=
    document.forms["RegForm"]["state"]; 

    var pincode =
    document.forms["RegForm"]["pincode"]; 
    
    if(email.value.match(mailformat) && email.value!=" " && address1.value !=" " && address2.value != "" && shop.value !=" " && 
      state.value !=" " &&   pincode.value.match(num) && pincode.length == 6 )

    {
    return true;
    }
   
//     if(pincod.value.match(num))
// {
// return true;
// }
 document.RegForm.email.focus() ;
alert("Error! Fill all the field");

return false;



 }