// app.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Place this middleware before your routes
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

app.listen(port, '0.0.0.0', () => {
    console.log(`The application is running at http://localhost:${port}`);
});
