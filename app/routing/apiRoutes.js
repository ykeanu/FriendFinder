// ==============================================================================
// NPM PACKAGES && IMPORTS 
// ==============================================================================
const friendsList = require("../data/friends.js");

// ==============================================================================
// EXPRESS ROUTING && EXPORT -> ../../server.js
// ==============================================================================
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsList);
    });

    app.post("/api/friends", function (req, res) {
        let friendsMatch = {
            name: "",
            photo: "",
            difference: 1000
        };

        let currentUser = req.body;
        let currentUserScore = currentUser.scores;
        let friendsDifference = 0;

        for (i = 0; i < friendsList.length; i++) {
            friendsDifference = 0;

            for (j = 0; j < currentUserScore.length; j++) {
                friendsDifference += Math.abs(currentUserScore[j] - friendsList[i].scores[j]);

                if (friendsDifference <= friendsMatch.difference) {
                    friendsMatch.name = friendsList[i].name;
                    friendsMatch.photo = friendsList[i].photo;
                    friendsMatch.difference = friendsDifference;
                }
            }
        }
        friendsList.push(currentUser);
        res.json(friendsMatch);
    });
};