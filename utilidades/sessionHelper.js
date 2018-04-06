
exports.validaSession  = (req) => {
	
	console.log('Validando session!');
	
	console.log(req.session.user);

	if (req.session.user === undefined) {
		return false;
	} else {
		//res.render('index', { title: 'PRM', msj: 'Bienvenido' });
		return true;
	}
}

exports.renderSession = (req, res, page, title, alertType, msj) => {

	console.log(this.validaSession(req))

	if (this.validaSession(req)) {

	  	if (req.query.alert == 'true') { //si el parametro alert existe y es 'true'
	    	msj = msj
	  	} else {
	  		msj = false
	  	}
	  	
	  	res.render(page, { 
	  		title: title,
	  		user: req.session.user,
	  		msj: msj,
	  		alertType: alertType
	  	});

	  } else {
	  	res.render('login', { 
	  		title: 'PRM', 
	  		msj: 'Debe iniciar sesión'
	  	});
	  }
	}


//module.exports = validaSession;