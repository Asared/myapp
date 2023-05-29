var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let purchase_list = await req.db.any(`
        SELECT
            purchase_list.purchase_id AS purchase_id,
            purchase_list.order_id AS order_id,
            purchase_list.purchase_date AS purchase_date
        FROM
            purchase_list
        INNER JOIN
            orders ON orders.id = purchase_list.order_id
    `)
    console.log(purchase_list)
    res.json({purchase_list: purchase_list })

});

module.exports = router;
