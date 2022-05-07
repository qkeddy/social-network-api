// Require supporting NPM modules
const mongoose = require('mongoose');

// Initialize object to connect to model
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, trim: true },
    //TODO - Add matching validation
    email: { type: String, required: true, unique: true },
    thoughts: { type: Array }  //We will learn more about this
    // TODO - Add thoughts ID
    // TODO - Add friends ID
});

const User = mongoose.model('User', userSchema);

const handleError = (err) => console.error(err);

// Will add data only if collection is empty to prevent duplicates
// More than one document can have the same name value
User.find({}).exec((err, collection) => {
    if (collection.length === 0) {
        User.insertMany(
            [
                { username: 'Joe', email: 'Joe@me.com' },
                { username: 'Sally', email: 'Sally@me.com' }
            ],
            (insertErr) => {
                if (insertErr) {
                    handleError(insertErr);
                }
            }
        );
    }
});

module.exports = User;
