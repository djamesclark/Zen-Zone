const router = require('express').Router();
router.get('/schedule', (req, res)=> {
    res.render('schedule')
})
module.exports = router;