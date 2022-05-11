// Plucking off `Schema` constructor and `model` method
const { Schema, model } = require('mongoose');

// Create `Reaction` Schema
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        required: true,
        default: new TypeError.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: [280, "Please do not exceed 280 characters"]
    },
    username: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    createdAd: {
        type: Date,
        default: Date.now
    }
});

model.exports = reactionSchema;
