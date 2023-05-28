var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let purchase_list = await req.db.any(`
        SELECT
            *
        FROM
            purchase_list
        INNER JOIN
            orders ON orders.id = purchase_list.id_order
    `)
    console.log(purchase_list)
    res.render('purchase_list/list', { title: 'Список покупок', purchase_list: purchase_list })

});

module.exports = router;
