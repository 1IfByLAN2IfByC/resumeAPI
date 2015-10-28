'use strict';

var User = require('../../app/models/user');

exports.list = function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
};
