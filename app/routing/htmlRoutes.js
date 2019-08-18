// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const path = require('path');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  // Route to home page
  // __dirname is a reserved word in the path package that gets the directory of the server.jss
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './app/public/home.html'));
  });

  app.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, './app/public/survey.html'));
  });

  // If no matching route is found default to home
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './app/public/home.html'));
  });
};
