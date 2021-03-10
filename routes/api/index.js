const path = require('path');
const router = require('express').Router();

// User routes
router.use('/user', require('./user'));

// Style routes
router.use('/style', require('./style'));

// City routes
router.use('/city', require('./city'));

// State routes
router.use('/state', require('./state'));

// Brewer routes
router.use('/brewer', require('./brewer'));

// Brew routes
router.use('/brew', require('./brew'));

// For anything else, render the html page
router.use((req, res) => {
	res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;
