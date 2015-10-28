'use strict';
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var BlogSchema = new Schema({
  title: String,
  text: String,
  createDate:{
    type: Date,
    default: Date.now,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Blog', BlogSchema);
