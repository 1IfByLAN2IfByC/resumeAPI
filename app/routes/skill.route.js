'use strict';

var express = require('express');
var skill   = require('../../app/controllers/skill.controller');
var auth    = require('../../app/controllers/authenticate.controller');
var isAuth  = auth.auth;
var router  = express.Router();

router.get('/', skill.list);
router.get('/:id', skill.listOne);
router.post('/', isAuth, skill.create);
router.put('/:id', isAuth, skill.update);
router.delete('/:id', isAuth, skill.delete);

module.exports = router;
