// ==============================================================================
// NPM PACKAGES && IMPORTS 
// ==============================================================================
const path = require("path");

// ==============================================================================
// EXPRESS ROUTING && EXPORT -> ../../server.js
// ==============================================================================
module.exports = function (app) {
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
};