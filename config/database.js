var mangoose = require("mongoose");
mangoose.connect(
  process.env.MONOGODB_URI || "mongodb://localhost:27017/mydb",
  err => {
    if (err) console.log(err);
    console.log("Connection Success");
  }
);
module.exports = { mangoose };
