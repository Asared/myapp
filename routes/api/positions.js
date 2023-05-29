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
    res.json({positions: positions })

});

module.exports = router;
