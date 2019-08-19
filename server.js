// Dependencies
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Router Files
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Listener
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});

// todo Send a 404 like in star wars
// todo validate on front and back end
