// Initialize Express.js router object
const router = require('express').Router();

// Add destructured methods from userController
const {
    getUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');

// /api/users
router.route('/')
    .get(getUsers)
    .post(createUser);

// /api/users/:userId
router.route('/:userId')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

// Export router
module.exports = router;
