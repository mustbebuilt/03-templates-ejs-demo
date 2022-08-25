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

module.exports = router;
