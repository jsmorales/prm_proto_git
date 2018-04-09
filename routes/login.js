var express = require('express');
var router = express.Router();

var Cliente = require('../client/client.js')
var cliente = new Cliente();
var crypto = require('crypto');


/* GET login page. */
router.get('/', function(req, res, next) {

	console.log(req.session)//imprimiendo session  	
  	res.render('login', { title: 'PRM', msj: false });
})

//post login app

router.post('/',  function(req, res, next) {
	
	var userPost = req.body;

	//encriptar md5 pass "e10adc3949ba59abbe56e057f20f883e"

	var userReq = {
	  "username":userPost.user,
	  "password":crypto.createHash('md5').update(userPost.password).digest("hex")
	}

	cliente.post("/authentication",userReq, (respuesta)=>{
	  	
	  	console.log(respuesta);

	  	var bodyRes = JSON.parse(respuesta.body);
	  	
	  	var status = respuesta.status;
	  	var success = bodyRes.success;
	  	var message = bodyRes.message;			 

	  	//console.log(status+'--'+success+'--'+message);
	  	

	  	if ( (success == true) && (status == 200) ) {

	  		delete userReq.password

	  		userReq.token = bodyRes.result.token;
	  		userReq.employee = bodyRes.result.employee;
		
			//crea el user en la session
			req.session.user = userReq;

			console.log(req.session);

			//res.redirect('/?alert=true');
			res.redirect('timeline');

		} else {
			res.render('login', { title: 'PRM', msj: message });
		}
	})

})

router.get('/out', function(req, res, next) {

	delete req.session.user;

	res.redirect('/login');

})

module.exports = router;
