// Dependencies
// =============================================================
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route to home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './app/public/home.html'));
});

// Route to Survey page
app.get('/survey', (req, res) => {
  res.sendFile(path.join(__dirname, './app/public/survey.html'));
});

// Listener
// ===========================================================
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
