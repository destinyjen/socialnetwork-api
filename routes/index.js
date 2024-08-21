// import api root routes
// create a new route file for the index route
const express = require('express').Router();

//create api routes
const apiRoutes = require('./api');

//create api routes
router.use('/api', apiRoutes);

//create catch-all route
router.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1>');
});

//export router
module.exports = router;  // export the router