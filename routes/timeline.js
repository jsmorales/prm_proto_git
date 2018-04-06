var express = require('express');
var router = express.Router();

//validacion de session

var helperSession = require("../utilidades/sessionHelper");

router.get('/', function(req, res, next) {
  
  helperSession.renderSession(req, res, 'timeline', 'PRM - Timeline', '', '');

});

module.exports = router;