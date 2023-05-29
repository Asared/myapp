var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    res.render('payments/list', { title: 'Платежи' })

});
router.get('/', async function(req, res, next) {

    res.render('payments/list', { title: 'Заказы' })

});

router.post('/create', async function(req, res, next) {

    let payments = req.body

    await req.db.none('INSERT INTO payments(id_order,id_payment_type, amount) VALUES(${id_order}, ${id_payment_type},${amount})', payments);

    res.send({msg: ''})

});

router.post('/delete', async function(req, res, next) {

    let payments = req.body

    await req.db.none("DO $do$ BEGIN IF (${id}<>'') THEN DELETE FROM payments WHERE id = ${id}; END IF; END $do$",payments);
    res.send({msg: ''})

});
module.exports = router;
