/**
 * Cargar la libreria de Jquery y ubicar el cursor en el campo de login
 */
$(document).ready(function () {
  estadoInicial()
});

function saveUser() {
  var name = $.trim($("#name").val());
  var email = $.trim($("#email").val());
  var password = $.trim($("#password").val());
  var password2 = $.trim($("#password2").val());

  if (name != "" && email != "" && password != "" && password2 != "") {
    if (password != password2) {
      alert("Las claves no coinciden");
      $("#password2").focus();
    }if(email == email){
      alert("el correo ya existe")
    } else {
      $.ajax({
        //url: 'http://129.151.97.36:8080/api/user/new',
        url: "http://localhost:8080/api/user/new",
        data: JSON.stringify({
          email: email,
          password: password,
          name: name,
        }),
        type: "POST",
        contentType: "application/json",
        
        error: function (result) {
          alert("Usuario no registrador..!");
          console.log(result);
        },
        success: function () {
          
          alert("Cuenta Creada de Manera Correcta...!");
          $("#formregister").trigger("reset");
          
        },
      });
    }
  }
  return false;
}
function estadoInicial() {
  $("#name").focus()
}
