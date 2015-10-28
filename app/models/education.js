'use strict';
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var EducationSchema = new Schema({
  school:  {
    type: String,
    required: true,
  },
  major: {
    type: String,
    required: true,
  },
  start: {
    type: String,
    required: true,
  },
  end: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Education', EducationSchema);
