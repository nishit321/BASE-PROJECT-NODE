var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

var userSchema = mongoose.Schema({
  fname: String,
  lname: String,
  username: String,
  password: String,
  email: String
});

//(middleware) hashing a password before saving it to the database
userSchema.pre("save", function(next) {
  var user = this;
  if (this.isNew) {
    bcrypt.hash(user.password, 10, function(err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  }
});
var user = (module.exports = mongoose.model("user", userSchema));

module.exports.authenticate = function(username, password, callback) {
  user.findOne({ username: username }, function(err, doc) {
    if (err) return callback(err);
    else if (!doc) {
      var err = new Error("User not found.");
      err.status = 401;
      return callback(err);
    }
    bcrypt.compare(password, doc.password, function(err, result) {
      if (result === true) {
        return callback(null, doc);
      } else {
        return callback();
      }
    });
  });
};
