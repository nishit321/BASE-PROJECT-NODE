const express = require("express");
var router = express.Router();

//model object
var user = require("../../models/user");

//user registration
router.post("/register", (req, res, next) => {
  var User = new user({
    name: req.body.name,
    lname: req.body.lname,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  });

  User.save((err, doc) => {
    if (!err) res.send(doc);
    else res.send(err);
  });
});

router.post("/login", (req, res, err) => {
  user.authenticate(req.body.username, req.body.password, (err, result) => {
    if (err) return res.send("Credentails Dosnot Match");
    else if (result) return res.send("Credentials Match Succesfully");
  });
});
module.exports = router;
