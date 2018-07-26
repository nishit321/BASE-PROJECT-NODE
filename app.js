var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//express setup
var app = express();
//mongoose setup
var configDB = require("./config/database.js");

//view engine setup
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

//body parser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//route setting
require("./routes/user")(app);

//setting listen method
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Starting on port ${port}`);
});

module.exports = app;
