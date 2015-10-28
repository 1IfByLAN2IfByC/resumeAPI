'use strict';

var Education = require('../../app/models/education');

exports.create = function(req, res) {
  var newEducation = new Education({
    school: req.body.school,
    major: req.body.major,
    start: req.body.start,
    end: req.body.end,
  });
  newEducation.save(function(err) {
    if (err) {
      res.json({
        message: 'error',
      });
    } else {
      res.json({
        message: 'successful save',
      });
    }
  });
};

exports.listOne = function(req, res) {
  Education.findById(req.params.id, function(err, education) {
    if (err) {
      res.json({
        message: 'error',
      });
    } else {
      res.json(education);
    }
  });
};

exports.list = function(req, res) {
  Education.find({}, function(err, educations) {
    if (err) {
      res.json({
        message: 'could not find educatons',
      });
      throw err;
    } else {
      res.json(educations);
    }
  });
};

exports.update = function(req, res) {
  Education.findById(req.params.id, function(err, education) {
    if (err) {
      throw err;
    } else {
      education.school = req.body.school;
      education.save(function(err, education) {
        if (err) {
          res.json(err);
        } else {
          res.json(education);
        }
      });
    }
  }
);
};

exports.delete = function(req, res) {
  Education.findOneAndRemove({ _id: req.params.id}, function(err) {
    if (err) {
      res.json({
        messsage:'not success deleting',
      });
    } else {
      res.json({
        messsage: 'success deleting',
      });
    }
  });
};
