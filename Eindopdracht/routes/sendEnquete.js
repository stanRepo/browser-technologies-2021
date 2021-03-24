var express = require("express");
var router = express.Router();
const fs = require("fs");
const path = require("path");

const dateTime = require("date-time");

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
        date: dateTime(),
        answers: {
          when: req.body.when,
          profs: req.body.profs,
          ratingCourse: req.body.ratingCourse,
          ratingExplanation: req.body.ratingExplanation,
          ratingUnderstanding: req.body.ratingUnderstanding,
          feedback: req.body.feedback,
        },
      };
      storedUser.enquetes.push(answerObj);
      const save = fs.writeFileSync(
        path.resolve(__dirname, "..", "database.json"),
        JSON.stringify(data)
      ); // save data to database.json
    }
  });
  const prevEnquetes = () => {
    let prevAnswers = false;
    data.forEach((storedUser) => {
      if (storedUser.studentNumber === req.body.studentNumber) {
        prevAnswers = storedUser.enquetes;
      }
    });
    return prevAnswers;
  };
  console.log(prevEnquetes());
  res.render("./pages/finished", {
    obj: req.body,
    previousEnquetes: prevEnquetes(),
  });
});

module.exports = router;
