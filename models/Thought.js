// Plucking off `Schema` constructor and `model` method
const { Schema, model } = require('mongoose');

// Plucking off `DateTime` from luxon
const { DateTime } = require('luxon');
const Reaction = require('./Reaction');

// Schema to create `Thought` model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: Schema.Types.String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Schema.Types.Date,
            default: Date.now,
            get: (rawDate) => rawDate.toLocaleString(DateTime.DATETIME_HUGE_WITH_SECONDS)
        },
        username: {
            type: Schema.Types.String,
            required: true
        },
        reactions: [Reaction]
    },
    {
        toJSON: { getters: true }
    }
);

// Initialize the `Thought` model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
