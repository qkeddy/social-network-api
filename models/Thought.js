// Plucking off `Schema` constructor and `model` method
const { Schema, model } = require('mongoose');

// Plucking off `DateTime` from luxon
const { DateTime } = require('luxon');

// Reference the Reactions (Schema Only)
const reactionSchema = require('./Reaction');

// Schema to create `Thought` model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: Schema.Types.String,
            required: true,
            minLength: 1,
            maxLength: [280, 'Please do not exceed 280 characters']
        },
        createdAt: {
            type: Schema.Types.Date,
            default: Date.now,
            get: (rawDate) =>
                rawDate.toLocaleString(DateTime.DATETIME_HUGE_WITH_SECONDS)
        },
        username: {
            type: Schema.Types.String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: { getters: true, virtuals: true },
        // id: false
    }
);

// Virtual to return a value for the number of reactions
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
})

// Initialize the `Thought` model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
