// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
//! const path = require('path');
// Friends Array of objects from friends.js
const friends = require('../data/friends');

// Set Global Variables
let diff = 0;
let totalDiff = 0;
let matches = [];
let matchesSorted = [];

// ROUTING
// Export this so I can use on server.js
module.exports = function(app) {
  // api Post Requests
  app.post('/api/friends', (req, res) => {
    // Get the post from the request body
    const newPerson = req.body;
    console.log(newPerson.name);

    // Get the users answers and put in array of numbers
    const answers = newPerson.scores;
    console.log(answers);

    console.log(friends.length);

    // Get the array of stored friends and lets compare
    // Loop over friends
    for (let i = 0; i < friends.length; i++) {
      // loop through each score and compare to users answers
      for (let y = 0; y < 10; y++) {
        // Get the difference between the 2 scores
        diff = answers[y] - friends[i].scores[y];

        // Add the diff to the totalDiff variable (use the Absolute Number)
        totalDiff += Math.abs(diff);
        // console.log(totalDiff);
      }

      // Push the index, name, and the diff to the matches array
      matches.push({
        index: i,
        name: friends[i].name,
        photo: friends[i].photo,
        diff: totalDiff,
      });

      // Clear the variables
      diff = 0;
      totalDiff = 0;
    }

    // Sort the matches so the lowest is index 0
    matchesSorted = matches.sort(function(a, b) {
      return a.diff - b.diff;
    });

    // Once get a match, then I can push this new user to the friends array
    friends.push(newPerson);

    console.log(matchesSorted[0].name);

    // Clear the matches array
    matches = [];

    // Return the match
    res.json(matchesSorted[0]);
  });

  // api Get Requests
  app.get('/api/friends', (req, res) => {
    res.json(friends);
  });
};
