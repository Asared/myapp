var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://postgres:test@localhost:5432/test')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var clientsRouter = require('./routes/clients');
var ordersRouter = require('./routes/orders');
var paymentsRouter = require('./routes/payments');
var materialRouter = require('./routes/material');
var order_itemsRouter = require('./routes/order_items');
var order_statuses_Router = require('./routes/order_statuses');
var payment_typesRouter = require('./routes/payment_types');
var positionsRouter = require('./routes/positions');
var precious_stoneRouter = require('./routes/precious_stone');
var productRouter = require('./routes/product');
var product_typeRouter = require('./routes/product_type');
var purchase_listRouter = require('./routes/purchase_list');
var rolesRouter = require('./routes/roles');
var staffRouter = require('./routes/staff');
var supplierRouter = require('./routes/supplier');

var app = express();

session          = require("./session.js")

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req,res,next){
    req.db = db;
    next();
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/clients', clientsRouter);
app.use('/orders', ordersRouter);
app.use('/payments', paymentsRouter);
app.use('/material', materialRouter);
app.use('/order_items', order_itemsRouter);
app.use('/order_statuses', order_statuses_Router);
app.use('/payment_types',payment_typesRouter);
app.use('/positions', positionsRouter);
app.use('/precious_stone', precious_stoneRouter);
app.use('/product', productRouter);
app.use('/product_type', product_typeRouter);
app.use('/purchase_list', purchase_listRouter);
app.use('/roles',rolesRouter);
app.use('/staff', staffRouter);
app.use('/supplier', supplierRouter);

var api      = require('./routes/api');
app.use('/api', api);
var api_auth = require('./routes/api/auth');
api.use('/auth', api_auth);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

db.one('SELECT $1 AS value', 123)
.then((data) => {
  console.log('DATA:', data.value)
})
.catch((error) => {
  console.log('ERROR:', error)
})

module.exports = app;
