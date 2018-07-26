//controller
var loginController = require("../app/controller/loginController");

module.exports = function(app) {
  //route for users
  app.use("/user", loginController);
};
