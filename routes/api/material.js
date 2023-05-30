var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let material = await req.db.any(`
        SELECT
            *
        FROM
            material
    `)
    console.log(material)
    res.json({material: material })

});

module.exports = router;
