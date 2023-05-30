var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    res.render('positions/list', { title: 'Должность'})

});
router.post('/create', async function(req, res, next) {

    let positions = req.body

    await req.db.none('INSERT INTO positions(position_name) VALUES(${position_name})', positions);

    res.send({msg: ''})

});

router.post('/delete', async function(req, res, next) {

    let positions = req.body

    await req.db.none("DO $do$ BEGIN IF (${id}<>'') THEN DELETE FROM positions WHERE position_id = ${id}; END IF; END $do$",positions);
    res.send({msg: ''})

});
module.exports = router;
module.exports = router;
