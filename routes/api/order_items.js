var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let order_items = await req.db.any(`
        SELECT
            *
        FROM
            order_items
    `)
    console.log(order_items)
    res.json({order_items: order_items })

});

module.exports = router;
