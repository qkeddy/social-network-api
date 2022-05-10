// Initialize Express.js router object
const router = require('express').Router();

// Add destructured methods from userController
const {
    getUsers,
    createUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');

// /api/users
router.route('/')
    .get(getUsers)
    .post(createUser);

// /api/users/:userId
// GET
// PUT
// DELETE

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

// Export router
module.exports = router;
