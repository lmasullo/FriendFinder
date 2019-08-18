// Dependencies
// =============================================================
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// todo Send a 404 like in star wars
// todo validate on front and back end

// Listener
// ===========================================================
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
