// Import references to the route models
const { User } = require('../models');

// Get all users using model in route to find all documents that are instances of the `user` model
const getUsers = async (req, res) => {
    try {
        const result = await User.find({}).select('-__v');
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send({ message: `Internal server error:\n${error}` });
    }
};

// Export controllers
module.exports = { getUsers };
