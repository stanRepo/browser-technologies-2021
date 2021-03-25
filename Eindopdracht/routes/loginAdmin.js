var express = require("express");
var router = express.Router();

router.post("/", function (req, res, next) {
  console.log("adminroute accessed");

  if ((req.body.username === "admin" && req.body.pw === "0000") || 0000) {
    res.render("./pages/admin");
  } else {
    res.render("./pages/adminLoginFailed", { obj: req.body });
  }
});

module.exports = router;
