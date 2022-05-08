// Initialize Express.js router object
const router = require('express').Router();

// Add destructured methods from userController
const { getUsers } = require('../../controllers/userController');

// GET a user
router.route('/').get(getUsers);

// Export router
module.exports = router;