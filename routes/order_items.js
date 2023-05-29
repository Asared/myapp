var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    res.render('order_items/list', { title: 'Элементы заказа'})

});
router.post('/create', async function(req, res, next) {

    let order_items = req.body

    await req.db.none('INSERT INTO order_items(label,id_order, amount) VALUES(${label}, ${id_order},${amount})', order_items);

    res.send({msg: ''})

});

router.post('/delete', async function(req, res, next) {

    let order_items = req.body

    await req.db.none("DO $do$ BEGIN IF (${id}<>'') THEN DELETE FROM order_items WHERE id = ${id}; END IF; END $do$",order_items);
    res.send({msg: ''})

});

module.exports = router;
module.exports = router;
