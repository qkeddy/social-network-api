// Require supporting NPM modules
const mongoose = require('mongoose');

// Wrap Mongoose around local connection to MongoDB
mongoose.connect('mongodb://localhost:27017/socialDB', {

    // Set options for compatibility with versions < Mongoose 6x
    useNewUrlParser: true,
    useUnifiedTopology: true
    
});

// Export connection
module.exports = mongoose.connection;
