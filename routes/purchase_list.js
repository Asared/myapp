var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    res.render('purchase_list/list', { title: 'Список покупок' })

});

module.exports = router;
