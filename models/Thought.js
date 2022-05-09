// Plucking off `Schema` constructor and `model` method
const { Schema, model } = require('mongoose');

// Schema to create `Thought` model
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: String,
    reactions: String
});

// Initialize the `Thought` model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
