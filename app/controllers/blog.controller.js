'use strict';

var Blog = require('../../app/models/blog');

exports.create = function(req, res) {
  var newBlog = new Blog({
    title: req.body.title,
    text: req.body.text,
    author: req.decoded._id,
  });
  newBlog.save(function(err) {
    if (err) {
      res.json({
        message: 'save failed',
      });
    } else {
      res.json({
        message: 'successful save',
      });
    }
  });
};

exports.listOne = function(req, res) {
  Blog.findById(req.params.id, function(err, blog) {
    if (err) {
      res.json({
        message: 'blog not found',
      });
    } else {
      res.json(blog);
    }
  });
};

exports.list = function(req, res) {
  Blog.find({}, function(err, blogs) {
    if (err) {
      res.json({
        message: 'blog not found',
      });
    } else {
      res.json(blogs);
    }
  });
};

exports.update = function(req, res) {
  Blog.findById(req.params.id, function(err, blog) {
    if (err) {
      res.json({
        message: 'blog not found',
      });
      throw err;
    } else {
      blog.text = req.body.text;
      blog.save(function(err, data) {
        if (err) {
          res.json({
            message: 'error updating',
          });
        } else {
          res.json({
            data: data,
            message: 'blog upddated',
          });
        }
      });
    }
  });
};

exports.delete = function(req, res) {
  Blog.findOneAndRemove({_id: req.params.id}, function(err) {
    if (err) {
      res.json({
        message: 'blog was not deleted',
      });
      throw err;
    } else {
      res.json({
        message: 'blog was deleted',
      });
    }
  });
};
