var express = require('express');
var router = express.Router();

//validacion de session

var helperSession = require("../utilidades/sessionHelper");

//router.use('/',validaSession);

/* GET home page. */
router.get('/', function(req, res, next) {

  helperSession.renderSession(req, res, 'index', 'PRM', 'success', 'Bienvenido ');

});

module.exports = router;

