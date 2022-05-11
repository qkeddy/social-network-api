// Initialize Express.js router object
const router = require('express').Router();

// Add destructured methods from thoughtController
const {
    getThoughts,
    getThought,
    createThought,
    updateThought,
    deletedThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/')
    .get(getThoughts)
    .post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
    .get(getThought)
    .put(updateThought)
    .delete(deletedThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
    .post(createReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

// Export router
module.exports = router;