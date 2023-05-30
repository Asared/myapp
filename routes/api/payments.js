var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let payments = await req.db.any(`
        SELECT
            *
        FROM
            payments
        INNER JOIN
            payment_types ON payment_types.id = payments.id_payment_type
        INNER JOIN
            orders ON orders.id = payments.id_order
    `)
    console.log(payments)
    res.json({payments: payments })

});

module.exports = router;
