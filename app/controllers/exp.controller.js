'use strict';

var Exp = require('../../app/models/exp');

exports.create = function(req, res) {
  var newExp = new Exp({
    name: req.body.name,
    type: req.body.type,
    description: req.body.description,
    user: req.decoded._id,
  });
  newExp.save(function(err) {
    if (err) {
      res.json({
        message: 'unsucessful save',
      });
      throw err;
    } else {
      res.json({
        message: 'successful save',
      });
    }
  });
};

exports.listOne = function(req, res) {
  Exp.findById(req.params.id, function(err, exp) {
    if (err) {
      res.json({
        message: 'could not find exp',
      });
      throw err;
    } else {
      res.json(exp);
    }
  });
};

exports.list = function(req, res) {
  Exp.find({}, function(err, exps) {
    if (err) {
      res.json({
        message: 'could not find exps',
      });
      throw err;
    } else {
      res.json(exps);
    }
  });
};

exports.update = function(req, res) {
  Exp.findById(req.params.id, function(err, exp) {
    if (err) {
      res.json({
        message: 'could not find exp',
      });
    } else {
      exp.description = req.body.description;
      exp.save(function(err, exp) {
        if (err) {
          res.json({
            message: 'update unsucessful',
          });
          throw err;
        } else {
          res.json(exp);
        }
      });
    }
  });
};

exports.delete = function(req, res) {
  Exp.findOneAndRemove(req.params.id, function(err) {
    if (err) {
      res.json({
        message: 'unsucessful delete',
      });
    } else {
      res.json({
        message: 'successful delete',
      });
    }
  });
};
