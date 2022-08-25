const express = require("express");

const router = express.Router();

router.get("/example", (req, res) => {
  return res.render("example", {
    title: "EJS Example",
    message: "Hello Template",
    myHeading: "This is my Heading",
  });
});

// adds dogs route

// add main route
router.get("/main", (req, res) => {
  return res.render("main", {
    title: "EJS Example from Parts",
    message: "Hello Template built in parts",
    showMsg: true,
    headingOne: "Page made from parts",
  });
});

module.exports = router;
