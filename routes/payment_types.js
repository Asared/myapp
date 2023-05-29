var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    res.render('payment_types/list', { title: 'Способ оплаты' })

});
router.post('/create', async function(req, res, next) {

    let payment_types = req.body

    await req.db.none('INSERT INTO payment_types(label) VALUES(${label})', payment_types);

    res.send({msg: ''})

});

router.post('/delete', async function(req, res, next) {

    let payment_types = req.body

    await req.db.none("DO $do$ BEGIN IF (${id}<>'') THEN DELETE FROM payment_types WHERE id = ${id}; END IF; END $do$",payment_types);
    res.send({msg: ''})

});

module.exports = router;
