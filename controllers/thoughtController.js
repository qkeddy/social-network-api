// Import references to the route models
const { Thought, User } = require('../models');


// Get all thoughts using model in route to find all documents that are instances of the `thoughts` model
const getThoughts = async (req, res) => {
    try {
        const result = await Thought.find({});
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send({ message: `Internal server error:\n${error}` });
    }
};

// Export controllers
module.exports = { getThoughts };
