var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    res.render('precious_stone/list', { title: 'Драгоценные камни'})

});
router.post('/create', async function(req, res, next) {

    let precious_stone = req.body

    await req.db.none('INSERT INTO precious_stone(stone_name,stone_price_per_gram) VALUES(${stone_name},${stone_price_per_gram})', precious_stone);

    res.send({msg: ''})

});

router.post('/delete', async function(req, res, next) {

    let precious_stone = req.body

    await req.db.none("DO $do$ BEGIN IF (${id}<>'') THEN DELETE FROM precious_stone WHERE stone_id = ${id}; END IF; END $do$",precious_stone);
    res.send({msg: ''})

});
module.exports = router;
