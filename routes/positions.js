var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let positions = await req.db.any(`
        SELECT
            *
        FROM
            positions
    `)
    console.log(positions)
    res.render('positions/list', { title: 'Должность', positions: positions })

});

module.exports = router;
