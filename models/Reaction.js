// Plucking off `Schema` constructor and `model` method
const { Schema, model, Types } = require('mongoose');

// Plucking off `DateTime` from luxon
const { DateTime } = require('luxon');

// Create `Reaction` Schema
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: Schema.Types.String,
            required: true,
            maxlength: [280, 'Please do not exceed 280 characters']
        },
        username: {
            type: Schema.Types.String,
            required: true
        },
        createdAt: {
            type: Schema.Types.Date,
            default: Date.now,
            get: (rawDate) =>
                rawDate.toLocaleString(DateTime.DATETIME_HUGE_WITH_SECONDS)
        }
    },
    {
        toJSON: { getters: true },
        id: false
    }
);

module.exports = reactionSchema;
