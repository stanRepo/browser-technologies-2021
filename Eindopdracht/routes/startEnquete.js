var express = require("express");
var router = express.Router();
const fs = require("fs");
const path = require("path");

let data = fs.readFileSync(path.resolve(__dirname, "..", "database.json"));
data = JSON.parse(data);

// Catch the form on POST request
router.post("/", function (req, res, next) {
  let bool = false;
  console.log(data);
  data.forEach((storedUser) => {
    // console.log(storedUser);
    if (
      storedUser.dateOfBirth === req.body.dateOfBirth &&
      storedUser.studentNumber === req.body.studentNumber &&
      storedUser.firstName === req.body.firstName &&
      storedUser.lastName === req.body.lastName
    ) {
      // user verified to access enquete
      this.bool = true;
      res.render("./pages/enquete", {
        obj: req.body,
      });
    }
  });

  // user unverified to access enquete
  if (!bool) {
    res.render("./pages/unauthorized", {
      obj: req.body,
    });
  }
});

module.exports = router;
