var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    res.render('product_type/list', { title: 'Тип изделия'})

});

module.exports = router;
