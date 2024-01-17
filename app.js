const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Define a route to display the message on the homepage
app.get('/', (req, res) => {
    res.render('message', { message: 'This is a simple message on the homepage using Express.js and EJS' });
});

// Start the server
app.listen(port, () => {
    console.log(`The application is running at http://localhost:${port}`);
});
