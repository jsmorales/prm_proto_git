var express = require('express');
var router = express.Router();

var Cliente = require('../client/client.js')
var cliente = new Cliente();

//validacion de session

var helperSession = require("../utilidades/sessionHelper");

router.get('/', function(req, res, next) {

  if (typeof req.session.user !== 'undefined') {

	  /*
	  console.log("haciendo get por acá!")

	  console.log(req.session.user.token)

	  cliente.setTokenHeader(req.session.user.token);

	  cliente.get('/availableAgents','', function(respuesta){
	  	console.log(respuesta)
	  })*/

	}else{
		 console.log("haciendo get mas alla!")
	}
  
  helperSession.renderSession(req, res, 'timeline', 'PRM - Timeline', '', '');

});

module.exports = router;