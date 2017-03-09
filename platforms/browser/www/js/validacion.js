function validarEntrada(){
	var password = $("#pass").val();
	if(!password){
          alert("ingrese pin");		
		
		
	}else{
	        var data = {
           password:password
        };
		$("#pass").val("");
        $.ajax({async: true,
            type: "POST",
            dataType: "JSON",
            url: "http://localhost/asignaciones/loginUser/validarUsuarioMovil",
            data: data,
            success: function (data) {
                if (data.response == "ok") {
					alert("paso");
					//localStorage.setItem("token",data.info['key']);
					//window.location="menu.html";
                } else {
                      alert(data.message);
                }
            },
            timeout: 1000000,
            error: function (data) {
                alert("Revisa tus parametros Error");
            }
        });	

		
	}
}
	
function validarAcceso(){
	 
	 var usuario = $("#usuarioValidacion").val(); 
	 var acceso = $("#accesoValidacion").val();
   if(!usuario && !acceso){
	   
	   alert("Faltan Datos");
	   
   }else if(usuario && !acceso) {
	   
	   alert("Falta acceso");
   }else if(!usuario && acceso){
	   
	   alert("Falta  usuario");
	   
   }else if(usuario && acceso){
	   
	   
	   alert("se guardara");
   }
	
	
	
	
	
}
	