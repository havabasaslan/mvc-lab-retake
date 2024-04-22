const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware for parsing incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Set public directory as the location for static files
app.use(express.static('public'));

// Routing middleware
app.use('/car', require('./routes/cars'));
app.use('/', require('./routes/home'));

// Handling 404 - Not Found
app.use((req, res, next) => {
  res.status(404).send("404 Not Found");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
