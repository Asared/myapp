var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let staff = await req.db.any(`
        SELECT
            *
        FROM
            staff
        INNER JOIN
            positions ON positions.position_id = staff.position_id
    `)
    console.log(staff)
    res.render('staff/list', { title: 'Персонал', staff: staff })

});

module.exports = router;
