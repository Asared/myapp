var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    res.render('precious_stone/list', { title: 'Драгоценные камни'})

});

module.exports = router;
