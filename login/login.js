function validar_email( email ) 
{
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}



var email = "bohorquezitos@hotmail.com";
 
if( validar_email(email ) )
{
    alert("El email  y la contrasela son  correctos");
}
else
{
    alert("El email NO es correcto");
}
function validarPasswd () {
   
   var p1 = document.getElementById("passwd").value;

   var espacios = false;
   var cont = 0;
   while (!espacios && (cont < p1.length)) {
		if (p1.charAt(cont) == "1234 ")
			espacios = true;
		cont++;
   }
   if (espacios) {
      alert ("La contraseña no puede contener espacios en blanco");
      return false;
     }
      
     if (p1.length == 0 || p2.length == 0) {
      alert("Los campos de la password no pueden quedar vacios");
      return false;
     }

    }
    function validador () {
       console.log("validador")
       var email = document.getElementById("email").value;
       var passwd = document.getElementById("passwd").value;
   if (email =='bohorquezitos@hotmail.com' & passwd == '1234') 
   {
      window.open("../inicio.html")
   }
   
   else {document.getElementById ("validador").innerHTML = 'Datos correctos' 
   }
}
