// NPM Packages
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Configure body-parser
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// Port
const PORT = process.env.PORT || 3000;

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }));

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }));

app.listen(PORT, function() {
    console.log("Server is running on PORT: " + PORT);
});