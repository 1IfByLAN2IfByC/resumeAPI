'use strict';

var express     = require('express');
var blog        = require('../../app/controllers/blog.controller');
var auth        = require('../../app/controllers/authenticate.controller');
var isAuth      = auth.auth;
var router      = express.Router();

router.get('/', blog.list);
router.get('/:id', blog.listOne);
router.post('/', isAuth, blog.create);
router.put('/:id', isAuth, blog.update);
router.delete('/:id', isAuth,  blog.delete);

module.exports = router;
