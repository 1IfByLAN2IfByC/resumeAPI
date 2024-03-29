'use strict';

var mongoose         = require('mongoose');
var Schema           = mongoose.Schema;
var bcrypt           = require('bcrypt');
var SALT_WORK_FACTOR = 10;

var UserSchema = new Schema({
  name:{
    type: String,
    required: true,
    index:{
      unique: true,
    },
    trim: true,
  },
  password:{
    type: String,
    required:true,
  },
  admin: Boolean,
});

UserSchema.pre('save', function(next) {
  var _this = this;
  var user = _this;

  if (!user.isModified('password')) {
    return next();

  }

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) {
        return next(err);
      }

      user.password = hash;
      next();
    });
  });

});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    }

    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', UserSchema);
