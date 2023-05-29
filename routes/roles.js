var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    res.render('roles/list', { title: 'Роли' })

});

module.exports = router;
