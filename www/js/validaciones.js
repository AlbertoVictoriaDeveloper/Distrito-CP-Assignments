











function validarEntrada(){
	var password = $("#pass").val();
 	if(!password){
          alert("ingrese pin");		
		
		
	}else{
       var data = {
           password:password
        };
        $.ajax({async: true,
            type: "POST",
            dataType: "JSON",
            url: "http://192.168.11.34/asignaciones/loginUser/validarUsuarioMovil",
            data: data,
            success: function (data) {
                if (data.response == "ok") {
			      localStorage.setItem("token",data.info['key']);
				  window.location="menu.html";
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
	

	
	
	
	
	
	
