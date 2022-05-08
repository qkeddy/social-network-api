// Initialize Express.js router object
const router = require('express').Router();

// Add destructured methods from thoughtController
const { getThoughts } = require('../../controllers/thoughtController');

// GET a thought

// POST a thought

// GET all thoughts
router.route('/').get(getThoughts);


// Export router
module.exports = router;