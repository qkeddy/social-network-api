// Initialize Express.js router object
const router = require('express').Router();

// Add destructured methods from thoughtController
const { getThoughts, createThought } = require('../../controllers/thoughtController');

// GET a thought
// X API ROUTE

// POST a thought
router.route('/').post(createThought);

// GET all thoughts
router.route('/').get(getThoughts);


// Export router
module.exports = router;