// Import references to the route models
const { User } = require('../models');

// Using model in route to find all documents that are instances of that model
const getUsers = async (req, res) => {
    try {
        const result = await User.find({});
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send({ message: 'Internal server error' });
    }
};

// Export controllers
module.exports = { getUsers };
