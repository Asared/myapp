var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let product_type = await req.db.any(`
        SELECT
            *
        FROM
            product_type
    `)
    console.log(product_type)
    res.render('product_type/list', { title: 'Тип изделия', product_type: product_type })

});

module.exports = router;
