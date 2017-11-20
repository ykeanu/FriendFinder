// ==============================================================================
// NPM PACKAGES && IMPORTS 
// ==============================================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Express
const app = express();

// Port
const PORT = process.env.PORT || 3000;

// ==============================================================================
// MIDDLEWARE
// ==============================================================================

// Parse through request data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(bodyParser.text());

// CORS Compatibility
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// ==============================================================================
// ROUTING VIA IMPORTS
// ==============================================================================
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// ==============================================================================
// SERVER VALIDATION
// ==============================================================================
app.listen(PORT, function() {
    console.log("Server is running on PORT: " + PORT);
});
