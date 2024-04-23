
const express = require('express');

const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello Cloud Computing with Azure! One update.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});