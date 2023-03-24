const express = require('express');

// Create a new instance of the Express app
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
const port = 5001;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});