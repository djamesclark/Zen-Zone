const router = require('express').Router();

router.get('/services', (req, res)=> {
    res.render('services')
})

module.exports = router;
