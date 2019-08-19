// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
const path = require('path');

// ROUTING
// Export this so I can use on server.js
module.exports = function(app) {
  // HTML GET Requests
  // Route to home page
  // __dirname is a reserved word in the path package that gets the directory of the server.jss
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });

  // Route to survey page
  app.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
  });

  // If no matching route is found default to home
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
};
