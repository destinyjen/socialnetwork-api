// create a new file called index.js in the routes/api directory
// add in express and create a new router
const router = require('express').Router();

//create route for thoughts and users
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

//create routes
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

//export router
module.exports = router;  // export the router