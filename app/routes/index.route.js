'use strict';

var express = require('express');
var config  = require('../../config/server.config');
var port    = config.port;
var router  = express.Router();

router.get('/', function(req, res) {
  res.send('Welcome to this piece of shit we call and API \n' +
		'It\'s on localhost:'  + port);
});

module.exports = router;
