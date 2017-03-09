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
	 var data = {
		  usuarioValidacion:usuario,
		  accesoValidacion:acceso
		 
		 
	 };
  $.ajax({async: true,
            type: "POST",
            dataType: "JSON",
            url: "http://192.168.11.34/asignaciones/menu/insertarAsignacion",
            data:data,
            success:function (data){
                            if (data.response == "ok") {
								alert("Acceso Asignado");
					           $("#tablaRegistro").load("menu.html");
						    window.location.reload();
                           
                } else {
                      alert(data.message);
                }
                
                
            },
            timeout: 1000000,
            error: function (data) {
                alert("Ocurrio  un Error");
            } 
          
      });
	    
   }
}
 $(document).ready(function(){

		   var key =  localStorage.getItem("token");
		 			  var data = {
						 token: key 
					 };

		// /* Inicio peticion tabla			*/
			         $.ajax({async: true,
						 type: "POST",
						  dataType: "JSON",
						   url: "http://192.168.11.34/asignaciones/menu/getRegistros",
						   data: data,
						  success: function (data) {
						   if (data.response == "ok") {
						     var registrase = JSON.stringify(data.info['datosAsignaciones']);
					       var arrayregistros = $.parseJSON(registrase);
						
		var tableregisters = "<thead>"+
                                '<tr role="row">'+
                                    "<th>Nombre Usuario Asignado</th>"+
                                    "<th>Nombre Acceso</th>"+
                                    "<th>Nombre Sitio</th>"+
                                    "<th>Usuario</th>"+
                                    "<th></th>"+
                                "</tr>"+
                            "</thead><tbody>";
				if(arrayregistros){
					$.each(arrayregistros, function (i,v)
					{
						tableregisters= tableregisters+"<tr role='row' class='odd'>"+
											"<td>"+v.nombre+"</td>"+
                                            "<td >"+v.nombre_acceso+"</td>"+
                                            "<td >"+v.nombre_sitio+"</td>"+
                                            "<td >"+v.usuario+"</td>"+
                                           "<td ><button id='EliminarAcceso' name ='EliminarAcceso' value='"+v.id+"' class='btn btn-danger btn-xs' onclick='eliminarAcceso()'><i class='fa fa-trash-o'></i></button></td>"+
                                
								 "</tr>";								
					});
					tableregisters=tableregisters+"</tbody>";
					$("#tablaRegistro").html(tableregisters); 
				} 
							 } else {
							 alert(data.message);
							 }
						 },
						 timeout: 1000000,
						 error: function (data) {
						 alert("Ocurrio un Error");
						 }
					 });	
 
					 			      $.ajax({async: true,
						 type: "POST",
						  dataType: "JSON",
						  url: "http://192.168.11.34/asignaciones/menu/getUsuarioMovil",
						   data: data,
						  success: function (data) {
						   if (data.response == "ok") {
						     var registrase = JSON.stringify(data.info['datosUsuarios']);
                             var arrayregistros = $.parseJSON(registrase);
							if(arrayregistros){
							  var optionUser ="<select  id = 'usuarioValidacion' name='usuarioValidacion' class='form-control'>"+				   
								 "<option selected value=''>Seleccione un Usuario</option>"; 
					$.each(arrayregistros, function (i,v)
					{
						
                        optionUser=optionUser+"<option value ='"+v.id+"'>"+v.nombre+"</option>" 
						                                  								
					});
					 optionUser=optionUser+"</select>";
					$("#validacionUsuario").html(optionUser); 
				} 
							
							 } else {
							 alert(data.message);
							 }
						 },
						 timeout: 1000000,
						 error: function (data) {
						 alert("error to get registers");
						 }
					 });
					 
					
					
				   $.ajax({async: true,
						 type: "POST",
						  dataType: "JSON",
						  url: "http://192.168.11.34/asignaciones/menu/getAccesosMovil",
						   data: data,
						  success: function (data) {
						   if (data.response == "ok") {
							 var registrase = JSON.stringify(data.info['datosAccesos']);
							 var arrayregistros = $.parseJSON(registrase);
                             							if(arrayregistros){
						  var optionUser = "<select id='accesoValidacion' name='accesoValidacion' class='form-control'>"+						  
						  "<option selected value=''>Seleccione un Acceso</option>";
					$.each(arrayregistros, function (i,v)
					{
                       optionUser=optionUser+"<option value = '"+v.id+"'>"+v.nombre_acceso+"</option>" 
						                                  								
					});
					optionUser=optionUser+"</select>";
					$("#validacionAccesos").html(optionUser); 
				} 
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
	
	
	
	
	
	   function eliminarAcceso(){
		   
          var  idAsignacion = $("#EliminarAcceso").val(); 
		if(!idAsignacion){
             
               alert("Error de datos ");	
             
             
          }else{
			 
       var data = {
                idAsignacion:idAsignacion
             
           }; 
              $.ajax({async: true,
             type: "POST",
             dataType: "JSON",
            url: "http://192.168.11.34/asignaciones/menu/eliminarAcceso",
             data:data,
            success:function (data){
                             if (data.response == "ok") {
								 
						  alert("Asignacion Eliminada");
				          $("#tablaRegistro").load("menu.html");
						    window.location.reload()
 
                 } else {
                      alert(data.message);
                 }
                
                
             },
             timeout: 1000000,
            error: function (data) {
           alert("ocurrio error");
            }
 
       });  
                     
             }  
        }

	
	
	
	
	
	
	
	
	
	
	
	
	