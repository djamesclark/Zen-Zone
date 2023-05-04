const router = require('express').Router();

router.get('/aboutus', (req, res)=> {
    res.render('aboutus')
})

module.exports = router;
