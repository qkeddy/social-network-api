// Initialize Express.js router object
const router = require('express').Router();

// Add destructured methods from thoughtController
const { getThoughts, createThought } = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/')
    .get(getThoughts)
    .post(createThought);

// /api/thoughts/:thoughtId
// GET
// PUT
// DELETE

// /api/thoughts/:thoughtId/reactions
// POST
// DELETE

// Export router
module.exports = router;