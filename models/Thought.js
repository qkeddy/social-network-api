// Plucking off `Schema` constructor and `model` method
const { Schema, model } = require('mongoose');

// Schema to create `Thought` model
const thoughtSchema = new Schema({
    thought: { type: String, required: true },
});


// Initialize the `Thought` model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;