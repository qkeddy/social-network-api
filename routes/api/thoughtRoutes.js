// Initialize Express.js router object
const router = require('express').Router();

// Add destructured methods from thoughtController
const { getThoughts, getThought, createThought } = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/')
    .get(getThoughts)
    .post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
    .get(getThought);

// PUT
// DELETE

// /api/thoughts/:thoughtId/reactions
// POST
// DELETE

// Export router
module.exports = router;