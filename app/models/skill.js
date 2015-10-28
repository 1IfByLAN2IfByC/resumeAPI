'use strict';
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var SkillSchema = new Schema({
  name:  {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Skill', SkillSchema);
