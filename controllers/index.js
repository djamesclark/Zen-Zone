//routes
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoute = require('./homeRoute');
const aboutusRoute = require('./aboutusRoute');
const servicesRoute = require('./servicesRoute');
const loginRoute = require('./loginRoute');
const scheduleroute = require('./scheduleroutes');

router.use('/api', apiRoutes);
router.use('/', homeRoute, aboutusRoute, servicesRoute, loginRoute, scheduleroute)

module.exports = router;

