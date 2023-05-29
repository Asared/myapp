var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    res.render('product/list', { title: 'Изделие'})

});

module.exports = router;
