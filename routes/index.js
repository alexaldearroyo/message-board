// routes/index.js

var express = require('express');
var router = express.Router();

var messages = [
  { author: 'Usuario 1', text: 'Este es el primer mensaje' },
  { author: 'Usuario 2', text: 'Aquí va otro mensaje' },
];

router.get('/', function(req, res, next) {
  res.render('message', { title: 'Express', messages: messages });
});

module.exports = router;
