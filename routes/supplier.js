var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let supplier = await req.db.any(`
        SELECT
            *
        FROM
            supplier
        INNER JOIN
            material ON material.material_id = supplier.material_id
        INNER JOIN
            precious_stone ON precious_stone.stone_id = supplier.stone_id
    `)
    console.log(supplier)
    res.render('supplier/list', { title: 'Поставщики', supplier: supplier })

});

module.exports = router;
