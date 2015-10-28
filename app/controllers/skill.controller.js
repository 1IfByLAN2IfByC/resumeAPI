'use strict';

var Skill = require('../../app/models/skill');

exports.create = function(req, res) {
  var newSkill = new Skill({
    name: req.body.name,
    level: req.body.level,
    type: req.body.type,
    user: req.decoded._id,
  });
  newSkill.save(function(err) {
    if (err) {
      res.json({
        message: 'save failed',
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
  Skill.findById(req.params.id, function(err, skill) {
    if (err) {
      res.json({
        message: 'skill not foiund',
      });
      throw err;
    } else {
      res.json(skill);
    }
  });
};

exports.list = function(req, res) {
  Skill.find({}, function(err, skills) {
    if (err) {
      res.json({
        message: 'could not find skills',
      });
      throw err;
    } else {
      res.json(skills);
    }
  });
};

exports.update = function(req, res) {
  Skill.findById(req.params.id, function(err, skill) {
    if (err) {
      res.json({
        message: 'skill not found',
      });
    } else {
      skill.level = req.body.level;
      skill.save(function(err, data) {
        if (err) {
          res.json({
            message: 'error saving',
          });
        } else {
          res.json({
            data: data,
            message: 'successful save',
          });
        }
      });
    }
  });
};

exports.delete = function(req, res) {
  Skill.findOneAndRemove({_id: req.params.id}, function(err) {
    if (err) {
      res.json({
        message: 'skill was not deleted',
      });
      throw err;
    } else {
      res.json({
        message: 'skill was deleted',
      });
    }
  });
};
