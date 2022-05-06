// Require supporting NPM modules
const express = require('express');

// Initialize required variables
const routes = require('./controllers');
const db = require('./config/connection');

// Initialize the Express.js server
const app = express();
const PORT = process.env.PORT || 3001;

// Ensure that the dotenv environment variables are available to create a session
require('dotenv').config();

// Invoke helper middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Turn on routes
app.use(routes);

// Start Express server once Mongoose has synchronized
// TODO - convert to async/await
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});