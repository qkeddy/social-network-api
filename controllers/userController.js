// Import references to the route models
const { User } = require('../models');

// Get all users using model in route to find all documents that are instances of the `user` model
const getUsers = async (req, res) => {
    try {
        const result = await User.find({}).select('-__v');
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: `Internal server error:  ${error}` });
    }
};

// Create a user using model in route
const createUser = async (req, res) => {
    try {
        const result = await User.create(req.body);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: `Internal server error:  ${error}` });
    }
};

// Get a user using model in route
const getUser = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.userId }).select(
            '-__v'
        );
        !user
            ? res.status(200).json({ message: 'This user does not exist' })
            : res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: `Internal server error:  ${error}` });
    }
};

// Update a user using model in route
const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            { _id: req.params.userId },
            { $set: { username: req.body.username, email: req.body.email } },
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

// Update a user using model in route
// TODO - Delete any associated friends 
const deleteUser = async (req, res) => {
    try {
        const user = await User.findOneAndRemove(
            { _id: req.params.userId },
            { $pull: { _id: req.params.userId } },
            { new: true }
        );
        !user
            ? res.status(200).json({ message: 'This user does not exist' })
            : res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: `Internal server error:  ${error}` });
    }
};

// Add a friend to a user using model in route
const addFriend = async (req, res) => {
    try {
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

// Remove a friend to a user using model in route
const removeFriend = async (req, res) => {
    try {
        const preUserUpdate = await User.findOne({ _id: req.params.userId });
        if (!preUserUpdate.friends.includes(req.params.friendId)) {
            res.status(200).json({
                message: 'This friend does not exist',
                friendId: req.params.friendId
            });
        } else {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId } },
                { runValidators: true, new: true }
            );
            !user
                ? res.status(200).json({ message: 'This user does not exist' })
                : res.status(200).json(user);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: `Internal server error:  ${error}` });
    }
};

// Export controllers
module.exports = {
    getUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
};
