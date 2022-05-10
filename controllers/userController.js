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

// Create a user using model in route
const createUser = async (req, res) => {
    try {
        const result = await User.create(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send({ message: `Internal server error:\n${error}` });
    }
};

// Create a user using model in route
const addFriend = async (req, res) => {
    try {
        console.log(
            `User: ${req.params.userId}   Friend: ${req.params.friendId}`
        );
        const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { runValidators: true, new: true }
        );
        !user
            ? res.status(200).json({ message: 'This user does not exist' })
            : res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: `Internal server error:  ${error}` });
    }
};

// Export controllers
module.exports = { getUsers, createUser, addFriend };
