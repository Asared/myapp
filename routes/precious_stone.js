var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let precious_stone = await req.db.any(`
        SELECT
            *
        FROM
            precious_stone
    `)
    console.log(precious_stone)
    res.render('precious_stone/list', { title: 'Драгоценные камни', precious_stone: precious_stone })

});

module.exports = router;
