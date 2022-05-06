// Initialize Express.js router object
const router = require('express').Router();

// Import references to the route models
const { User } = require('../../models');

/** **************************************
 ** The `/api/user` endpoint
 *  **************************************/

// GET a user
// TODO - convert to async/await and fix error message
router.get('/', (req, res) => {
    // Using model in route to find all documents that are instances of that model
    User.find({}, (err, result) => {
        if (result) {
            res.status(200).json(result);
        } else {
            console.log('Uh Oh, something went wrong');
            res.status(500).json({ message: 'something went wrong' });
        }
    });
});

module.exports = router;