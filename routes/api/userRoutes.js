// Initialize Express.js router object
const router = require('express').Router();

// Add destructured methods from userController
const {
    getUsers,
    createUser,
    addFriend
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
    .put(addFriend);
// POST
// DELETE

// Export router
module.exports = router;
