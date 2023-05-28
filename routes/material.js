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
    res.render('material/list', { title: 'Матераил', material: material })

});

module.exports = router;
