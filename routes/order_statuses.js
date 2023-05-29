var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    res.render('order_statuses/list', { title: 'Статус заказа' })

});
router.post('/create', async function(req, res, next) {

    let order_statuses = req.body

    await req.db.none('INSERT INTO order_statuses(label) VALUES(${label})', order_statuses);

    res.send({msg: ''})

});

router.post('/delete', async function(req, res, next) {

    let order_statuses = req.body

    await req.db.none("DO $do$ BEGIN IF (${id}<>'') THEN DELETE FROM order_statuses WHERE id = ${id}; END IF; END $do$",order_statuses);
    res.send({msg: ''})

});
module.exports = router;
