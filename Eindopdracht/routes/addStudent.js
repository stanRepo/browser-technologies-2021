var express = require("express");
var router = express.Router();
const fs = require("fs");
const path = require("path");

let data = fs.readFileSync(path.resolve(__dirname, "..", "database.json"));
data = JSON.parse(data);

router.post("/", function (req, res, next) {
  const obj = req.body;
  const userExists = false;
  obj.enquetes = [];
  // first check if user exists
  data.forEach((storedUser) => {
    if (
      storedUser.firstName === obj.firstName &&
      storedUser.lastName === obj.lastName
    ) {
      userExists = true;
      console.log(
        "user already exists in DB - Add Extra validation to this block"
      );
    }
  });
  if (!userExists) {
    // assemble obj
    const save = fs.writeFileSync(
      path.resolve(__dirname, "..", "database.json"),
      JSON.stringify(data)
    ); // save data to database.json
    res.render("./pages/studentAdded", { obj: req.body });
  }
});

module.exports = router;
