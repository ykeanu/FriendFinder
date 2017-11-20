const friendsList = require("../data/friends.js");

// ============ ROUTING ============
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsList);
    });

    app.post("/api/friends", function(req, res) {
        let bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        let userData = req.body;
        let userScores = userData.score;

        let totalDifference = 0;

        // Nested for loops + conditionals
        for (var i=0; i < friendsList.lenth; i++) {
            console.log(friendsList[i]);
            totalDifference = 0;

            for (var j = 0; j < friendsList[i].scores[j]; j++) {
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendsList[i].scores[j]));

                if (totalDifference <= bestMath.friendDifference) {
                    bestMatch.name = friendsList[i].name;
                    bestMatch.photo = friendsList[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }
        friendsList.push(userData);

        res.json(bestMatch);
    });
}
