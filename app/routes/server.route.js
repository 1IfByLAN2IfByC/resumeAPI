'use strict';

var express      = require('express');
var index        = require('../../app/routes/index.route');
var authenticate = require('../../app/routes/authenticate.route');
var users        = require('../../app/routes/users.route');
var blog         = require('../../app/routes/blog.route');
var education    = require('../../app/routes/education.route');
var exp          = require('../../app/routes/exp.route');
var skill        = require('../../app/routes/skill.route');
var router       = express.Router();

router.use('/', index);
router.use('/login', authenticate);
router.use('/users', users);
router.use('/blog', blog);
router.use('/education', education);
router.use('/exp', exp);
router.use('/skill', skill);

//router.use(admin);

module.exports = router;
