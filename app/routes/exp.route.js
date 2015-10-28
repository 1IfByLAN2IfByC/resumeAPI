'use strict';

var express = require('express');
var exp     = require('../../app/controllers/exp.controller');
var auth    = require('../../app/controllers/authenticate.controller');
var isAuth  = auth.auth;
var router  = express.Router();

router.get('/', exp.list);
router.get('/:id', exp.listOne);
router.post('/', isAuth, exp.create);
router.put('/:id', isAuth, exp.update);
router.delete('/:id', isAuth, exp.delete);

module.exports = router;
