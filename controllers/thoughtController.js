// Import references to the route models
const { Thought, User } = require('../models');

// Get all thoughts using model in route to find all documents that are instances of the `thoughts` model
const getThoughts = async (req, res) => {
    try {
        const result = await Thought.find({});
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send({ message: `Internal server error:  ${error}` });
    }
};

// Export controllers
const createThought = async (req, res) => {
    try {
        const result = await Thought.create(req.body);
        const user = await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $addToSet: { thoughts: result._id } },
            { new: true }
        );
        !user
            ? res.status(200).json({
                  message: 'Thought created, but found no user with that ID'
              })
            : res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: `Internal server error:  ${error}` });
    }
};
module.exports = { getThoughts, createThought };
