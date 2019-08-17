// Dependencies
// ===========================================================
const express = require('express');

const app = express();
const PORT = process.event.PORT || 3000;

// Listener
// ===========================================================
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
