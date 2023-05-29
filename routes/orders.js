var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    res.render('orders/list', { title: 'Заказы' })

});
router.get('/edit/:id', async function(req, res, next) {
    let id = req.params.id;
    let order = await req.db.any(`
      SELECT
            orders.id AS id,
            orders.label AS label,
            orders.amount AS amount
        FROM
            orders
    `, [id]);
    console.log(order);
    let clients = await req.db.any(`
          SELECT
              *
          FROM
              clients
      `)
      res.render('orders/edit', {
        title: 'Редактирование заказа',
        label: order[0].label,
        amount: order[0].amount
      });
  });
  
  router.post('/update/:id', async function(req, res, next) {
    let id = req.params.id;
    let updatedOrder = req.body;
    await req.db.none(`UPDATE orders SET label = $1, amount = $2 WHERE id = $3`, [updatedOrder.label, updatedOrder.amount, id]);
    res.send({ msg: '' });
  });

router.post('/create', async function(req, res, next) {

    let orders = req.body

    await req.db.none('INSERT INTO orders(label, amount) VALUES(${label}, ${amount})', orders);

    res.send({msg: ''})

});

router.post('/delete', async function(req, res, next) {

    let orders = req.body

    await req.db.none("DO $do$ BEGIN IF (${id}<>'') THEN DELETE FROM orders WHERE id = ${id}; END IF; END $do$",orders);
    res.send({msg: ''})

});

module.exports = router;