var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {

	console.log(req.session)//imprimiendo session  	
  	res.render('login', { title: 'PRM', msj: false });
})

var userObjt = {
	user: 'jsmorales',
	password: '12345'
}

router.post('/',  function(req, res, next) {
	//mostrando los valores del formulario
	//console.log(req.body)

	var userPost = req.body;

	//console.log(userPost)
	//console.log(userObjt)

	/**/
	if ( (userPost.user == userObjt.user) && (userPost.password == userObjt.password) ) {
		
		//crea el user en la session
		req.session.user = userPost;

		console.log(req.session);

		//res.redirect('/?alert=true');
		res.redirect('timeline');

	} else {
		res.render('login', { title: 'PRM', msj: 'Inicio de sesion inválido.' });
	}

})

router.get('/out', function(req, res, next) {

	delete req.session.user;

	res.redirect('/login');

})

module.exports = router;
