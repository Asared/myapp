var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let supplier = await req.db.any(`
        SELECT
            supplier.supplier_id AS supplier_id,
            supplier.supplier_name AS supplier_name,
            supplier.material_id AS material_id,
            supplier.stone_id AS stone_id
        FROM
            supplier
        INNER JOIN
            material ON material.material_id = supplier.material_id
        INNER JOIN
            precious_stone ON precious_stone.stone_id = supplier.stone_id
    `)
    console.log(supplier)
    res.json({supplier: supplier })

});

module.exports = router;
