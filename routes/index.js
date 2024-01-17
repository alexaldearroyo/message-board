var express = require("express");
var router = express.Router();

var messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", function (req, res, next) {
  // Update the title to "Mini Messageboard"
  res.render("message", { title: "Mini Messageboard", messages: messages });
});

// New route for the "/new" path
router.get("/new", function (req, res, next) {
    res.render("message", { title: "New Message", messages: messages });
});

router.post('/new', function(req, res, next) {
    // Directly push new message object into messages array
    messages.push({
      text: req.body.text,
      user: req.body.user,
      added: new Date()
    });

    res.redirect('/');
});

module.exports = router;
