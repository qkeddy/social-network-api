// Initialize Express.js router object
const router = require('express').Router();

// Initialize route to home path (./)
// const homeRoutes = require('./homeRoutes');  // Uncomment when required

// Initialize route to API path (./api/index.js)
const apiRoutes = require('./api');

// Open the route by defining the URI path to "/api"
// router.use('/', homeRoutes);  // Uncomment when required
router.use('/api', apiRoutes);
// router.use(router.apiRoutes);
// apiRoutes.initialize(router);

// Export the router object
module.exports = router;
