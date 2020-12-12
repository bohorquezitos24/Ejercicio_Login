function validar_email( email ) 
{
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}



var email = "bohorquezitos@hotmail.com";
 
if( validar_email(email ) )
{
    alert("El email es correcto");
}
else
{
    alert("El email NO es correcto");
}
function validarPasswd () {
   
   var passwd = document.getElementById("passwd").value;


 

    }
    function validador () {
       console.log("validador")
       var email = document.getElementById("email").value;
       var passwd = document.getElementById("passwd").value;
   if (email =='bohorquezitos@hotmail.com' & passwd == '1234') 
   {
      window.open("./inicio.html")
   }
   
   else {document.getElementById ("validador").innerHTML = 'Datos correctos' 
   }
}
