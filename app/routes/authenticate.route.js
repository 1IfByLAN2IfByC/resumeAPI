'use strict';

var express      = require('express');
var authenticate = require('../../app/controllers/authenticate.controller');
var router       = express.Router();

router.post('/', authenticate.getToken);
router.post('/auth', authenticate.auth);

module.exports = router;
