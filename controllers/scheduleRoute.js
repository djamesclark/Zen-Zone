const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoute = require('./homeRoute');
const aboutusRoute = require('./aboutusRoute');
const servicesRoute = require('./servicesRoute');
const loginRoute = require('./loginRoute');
const scheduleRoute = require('./scheduleRoute');

router.use('/api', apiRoutes);
router.use('./',homeRoute, aboutusRoute, servicesRoute, loginRoute, scheduleRoute);
router.get('/schedule', (req, res)=> {
    res.render('schedule')
})
module.exports = router;