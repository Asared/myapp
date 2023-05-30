var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    res.render('material/list', { title: 'Материалы' })

});
router.post('/create', async function(req, res, next) {

    let material = req.body
    console.log(material)
    await req.db.none('INSERT INTO material(material_name,material_price_per_gram) VALUES(${material_name},${material_price_per_gram})', material);
    
    res.send({msg: ''})

});

router.post('/delete', async function(req, res, next) {

    let material = req.body

    await req.db.none("DO $do$ BEGIN IF (${material_id}<>'') THEN DELETE FROM material WHERE material_id = ${material_id}; END IF; END $do$",material);
    res.send({msg: ''})

});
module.exports = router;