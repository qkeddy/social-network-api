// Initialize the API Express Router and the actual routes to each API
const router = require('express').Router();
const userRoutes = require('../../controllers/api/userRoutes');

// Further defining the URI path, by tethering the routes
router.use('/users', userRoutes);

// Export the router object
module.exports = router;
