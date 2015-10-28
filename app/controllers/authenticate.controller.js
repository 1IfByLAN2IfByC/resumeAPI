'use strict';
var User   = require('../../app/models/user');
var jwt    = require('jsonwebtoken');
var config = require('../../config/server.config');

var secret = config.secret;

exports.getToken = function(req, res) {
  User.findOne({
    name: req.body.name,
  },  function(err, user)  {
    if (err) {
      throw err;
    }

    if (!user) {
      res.json({
        success: false,
        message: 'User does not exist',
      });
    } else {
      user.comparePassword(req.body.password, function(err, isMatch) {
        if (isMatch !== false && req.body.password !== undefined) {
          var token = jwt.sign(user, secret, {
            expiresInMinutes: 1440,
          });
          return res.json({
            success: true,
            message: 'token has been passed',
            token: token,
          });
        } else {
          return res.json({
            success: false,
            message: 'password incorrect',
          });
        }
      });
    }
  });
};

exports.auth = function(req, res, next) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (token) {
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        return res.json({
          message: 'Unsuccessful token authenitcaton',
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.status(403).send({
      succes: false,
      message: 'No Token Provided',
    });
  }
};
