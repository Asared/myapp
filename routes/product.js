var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let product = await req.db.any(`
        SELECT
            *
        FROM
            product
        INNER JOIN
            material ON material.material_id = product.material_id
        INNER JOIN
            precious_stone ON precious_stone.stone_id = product.stone_id
        INNER JOIN
            product_type ON product_type.type_id = product.type_id
    `)
    console.log(product)
    res.render('product/list', { title: 'Изделие', product: product })

});

module.exports = router;
