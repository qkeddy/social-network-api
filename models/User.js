// Plucking off `Schema` constructor and `model` method
const { Schema, model } = require('mongoose');

// Schema to create `User` model
const userSchema = new Schema({
    username: { type: String, required: true, unique: true, trim: true },
    //TODO - Add matching validation
    email: { type: String, required: true, unique: true },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    ]
});

// Initialize the `User` model
const User = model('user', userSchema);

// Initialize function for error handling for seedings
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
