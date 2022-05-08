// Initialize the API Express Router and the actual routes to each Route
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// Further defining the URI path, by tethering the routes
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

// Export the router object
module.exports = router;
