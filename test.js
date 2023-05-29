const server = require('./app.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);

describe('User Endpoints', () => {

  it('GET /user should show all users', async () => {
    const res = await requestWithSupertest.get('/api/users');
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('users')
      expect(res.body.users.length > 0)
      expect(res.body.users[0]).toHaveProperty('id')
      expect(res.body.users[0]).toHaveProperty('login')
      expect(res.body.users[0]).toHaveProperty('fio')
      expect(res.body.users[0]).toHaveProperty('role_label')
  });
  it('GET /client should show all clients', async () => {
    const res = await requestWithSupertest.get('/api/clients');
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('clients')
      expect(res.body.clients.length > 0)
      expect(res.body.clients[0]).toHaveProperty('id')
      expect(res.body.clients[0]).toHaveProperty('label')
  });
  it('GET /order_item should show all order_items', async () => {
    const res = await requestWithSupertest.get('/api/order_items');
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('order_items')
      expect(res.body.order_items.length > 0)
      expect(res.body.order_items[0]).toHaveProperty('id')
      expect(res.body.order_items[0]).toHaveProperty('label')
      expect(res.body.order_items[0]).toHaveProperty('id_order')
      expect(res.body.order_items[0]).toHaveProperty('amount')
  });
  it('GET /order_status should show all order_statuses', async () => {
    const res = await requestWithSupertest.get('/api/order_statuses');
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('order_statuses')
      expect(res.body.order_statuses.length > 0)
      expect(res.body.order_statuses[0]).toHaveProperty('id')
      expect(res.body.order_statuses[0]).toHaveProperty('label')
  });
  it('GET /orders should show all orders', async () => {
    const res = await requestWithSupertest.get('/api/orders');
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('orders')
      expect(res.body.orders.length > 0)
      expect(res.body.orders[0]).toHaveProperty('id')
      expect(res.body.orders[0]).toHaveProperty('label')
      expect(res.body.orders[0]).toHaveProperty('amount')
  });
  it('GET /product should show all products', async () => {
    const res = await requestWithSupertest.get('/api/product');
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('product')
      expect(res.body.product.length > 0)
      expect(res.body.product[0]).toHaveProperty('product_id')
      expect(res.body.product[0]).toHaveProperty('product_name')
      expect(res.body.product[0]).toHaveProperty('production_cost')
      expect(res.body.product[0]).toHaveProperty('material_id')
      expect(res.body.product[0]).toHaveProperty('stone_id')
      expect(res.body.product[0]).toHaveProperty('material_weight')
      expect(res.body.product[0]).toHaveProperty('stone_weight')
      expect(res.body.product[0]).toHaveProperty('type_id')
  });
  it('GET /product_type should show all product_types', async () => {
    const res = await requestWithSupertest.get('/api/product_type');
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('product_type')
      expect(res.body.product_type.length > 0)
      expect(res.body.product_type[0]).toHaveProperty('type_id')
      expect(res.body.product_type[0]).toHaveProperty('type_name')
  });
  it('GET /role should show roles', async () => {
    const res = await requestWithSupertest.get('/api/roles');
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('roles')
      expect(res.body.roles.length > 0)
      expect(res.body.roles[0]).toHaveProperty('id')
      expect(res.body.roles[0]).toHaveProperty('code')
      expect(res.body.roles[0]).toHaveProperty('label')
  });
  it('GET /staff should show all staffs', async () => {
    const res = await requestWithSupertest.get('/api/staff');
      expect(res.status).toEqual(200);
      expect(res.type).toEqual(expect.stringContaining('json'));
      expect(res.body).toHaveProperty('staff')
      expect(res.body.staff.length > 0)
      expect(res.body.staff[0]).toHaveProperty('staff_id')
      expect(res.body.staff[0]).toHaveProperty('fio')
      expect(res.body.staff[0]).toHaveProperty('position_id')
  });
});
