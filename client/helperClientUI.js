(function(){

	/*
	$.ajax({
      url: "../controller/ajaxController12.php",
      data: ajustes.objt_f.srlz+"&tipo="+ajustes.tipo_ajax.crear+"&nom_tabla="+ajustes.nom_tabla,
    })
    .done(function(data) {            
      //---------------------
      console.log(data);
      alert(data[0].mensaje);                 
                                         
      //Ejecuta callback-----------------------------------------------------------                  
      ajustes.functionAfter(data,ajustes);
      //---------------------------------------------------------------------------
      //verifica si debe auditar
      if (ajustes.auditar) {                    
        console.log("Debe auditar!")
        var audita = new audit(ajustes.action, data.query, ajustes.nom_modulo);
        audita.auditar()
      };                    
      //---------------------------------------------------------------------------
      if (ajustes.recarga == true) {                    
        location.reload();                    
      }; 
      //---------------------------------------------------------------------------
                
    })
    .fail(function(data) {
      console.log(data);
      alert(data[0].mensaje);          
    })
    .always(function() {
      console.log("complete");
    });





    $.ajax({
			  type: 'GET',
			  url: 'https://sillaruedassai.azurewebsites.net/api/availableAgents',
			  async: true,
			  contentType: 'application/json',
		      
		      //dataType: 'json',
		      beforeSend: function(request) {
		      	//request.setRequestHeader("Access-Control-Allow-Origin:", "*");
				//request.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, PUT");
		      	//request.setRequestHeader("token", self.token);
		      	request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
		      	console.log(request)	 
			  },
		      crossDomain: true,
		       
		      data: ''
		    }).done(function(data) {            
		      //---------------------
		      console.log('Todo OK');
		      console.log(data);
		      //---------------------		      		                
		    })
		    .fail(function(data) {
		    	console.log('Fallo el servicio');
		      console.log(data);		      
		    })
		    .always(function() {
		      console.log("complete");
		    });
	*/

	self.helperClientUI = function(token){

		this.host = 'sillaruedassai.azurewebsites.net';	   
	    this.protocolo = 'https';
	    this.token = token;
	    this.type = "";
	    //this.uri = "";
	}

	self.helperClientUI.prototype = {

		get: function(uri){

			this.type = "GET";
			
			console.log("Ejecutando el get a "+uri)

			this.execute(this.type,uri);
		},
		execute: function(tipo,uri){

			var self = this;
			//self.protocolo+"://"+self.host+"/api"+uri,
			
			/*

		    $.ajax({
		    	dataType: 'json',
		    	//contentType: 'application/json',
		    	crossDomain: true,
		    			    	
		        url: "https://sillaruedassai.azurewebsites.net/api/availableAgents",		        
		        data: {"token": self.token}
		    }).done(function() {
			    alert( "success" );
			  })
			  .fail(function($xhr) {
			  	alert( "fail" );
			     //console.log( $xhr.responseJSON );
			     //console.log( textStatus );
			  })
			  .always(function() {
			    alert( "complete" );
			  });*/

			/*$.ajax({
				type : "Get",
			    url: "https://sillaruedassai.azurewebsites.net/api/availableAgents",
			 
			    // The name of the callback parameter, as specified by the YQL service
			    //jsonp: "callback",
			 	jsonp: false,
			    // Tell jQuery we're expecting JSONP
			    dataType: "jsonp",
			 
			    // Tell YQL what we want and that we want JSON
			    data: {
			        token: self.token,
			        format: "json"
			    },
			 
			    //jsonpCallback: "myJsonMethod",
			    success : function(data){
			        console.log(data);
			    },
			    error : function(httpReq,status,exception){
			        console.log(status+" "+exception);
			    }
			});*/

			$.getJSON( "https://sillaruedassai.azurewebsites.net/api/availableAgents", {
				token: self.token
			}).done(function( data ) {
				console.log(data);
			}).fail(function( jqxhr, textStatus, error ) {
			    var err = textStatus + ", " + error;
			    console.log( "Request Failed: " + err );
			});

		}

	}

})()