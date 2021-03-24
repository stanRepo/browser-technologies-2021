var express = require("express");
var router = express.Router();
const fs = require("fs");
const path = require("path");

let data = fs.readFileSync(path.resolve(__dirname, "..", "database.json"));
data = JSON.parse(data);
// Catch the form on POST request
router.post("/", function (req, res, next) {
  console.log(req.body);
  data.forEach((storedUser) => {
    //  loop through data
    if (storedUser.studentNumber === req.body.studentNumber) {
      // find current user
      const answerObj = {
        // assemble obj
        courseName: req.body.course,
        answers: req.body,
      };
      storedUser.answers.push(answerObj);
      const save = fs.writeFileSync(
        path.resolve(__dirname, "..", "database.json"),
        JSON.stringify(data)
      ); // save data to database.json
    }
  });

  res.render("finished", {
    obj: req.body,
  });
});

module.exports = router;
