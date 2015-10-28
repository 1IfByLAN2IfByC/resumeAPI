'use strict';

var express   = require('express');
var education = require('../../app/controllers/education.controller');
var auth      = require('../../app/controllers/authenticate.controller');
var isAuth    = auth.auth;
var router    = express.Router();

router.get('/', education.list);
router.get('/:id', education.listOne);
router.post('/', isAuth, education.create);
router.put('/:id', isAuth, education.update);
router.delete('/:id', isAuth, education.delete);

module.exports = router;
