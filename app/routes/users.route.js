'use strict';

var express = require('express');
var users   = require('../../app/controllers/users.controller');
var router  = express.Router();

router.get('/', users.list);

module.exports = router;
