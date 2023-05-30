var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    res.render('clients/list', { title: 'Клиенты' })

});

router.post('/create', async function(req, res, next) {

    let clients = req.body

    await req.db.none('INSERT INTO clients(label) VALUES(${label})', clients);

    res.send({msg: ''})

});

router.post('/delete', async function(req, res, next) {

    let clients = req.body

    await req.db.none("DO $do$ BEGIN IF (${id}<>'') THEN DELETE FROM clients WHERE id = ${id}; END IF; END $do$",clients);
    res.send({msg: ''})

});
module.exports = router;
