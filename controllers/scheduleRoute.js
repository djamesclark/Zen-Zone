const router = require('express').Router();
router.get('/schedule', (req, res)=> {
    res.render('schedule', {
        logged_in: req.session.logged_in
    })
})
module.exports = router;