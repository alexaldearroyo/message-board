// app.js

const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/', router);

app.listen(port, () => {
    console.log(`The application is running at http://localhost:${port}`);
});
