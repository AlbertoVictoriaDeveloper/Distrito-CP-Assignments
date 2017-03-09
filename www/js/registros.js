    $(document).ready(function(){
	   var key =  localStorage.getItem("token");
		 			  var data = {
						 token: key 
					 };
		// /* Inicio peticion tabla			*/
			        $.ajax({async: true,
						 type: "POST",
						  dataType: "JSON",
						   url: "http://192.168.11.34/asignaciones/menu/getUsuarioMovil",
						   data: data,
						  success: function (data) {
						   if (data.response == "ok") {
						     var registrase = JSON.stringify(data.info['datosUsuarios']);
							// var registrarUsuario = JSON.stringify(data.info2['datosUsuarios']);
							 alert("pasaron los datos Usuarios");
						     alert(registrase);
							 } else {
							 alert(data.message);
							 }
						 },
						 timeout: 1000000,
						 error: function (data) {
						 alert("error to get registers");
						 }
					 });	

                $("#token").val(localStorage.getItem("token"));
	
	
	
	});

	
	
	function cerrarSession(){
			localStorage.removeItem("token");
			 window.location = "index.html";
		
	}