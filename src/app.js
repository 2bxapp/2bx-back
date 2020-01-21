'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

// Connecta ao banco
mongoose.connect(config.connectionString);

// Carrega os Models
const Product = require('./models/product');
const Client = require('./models/client');
const Order = require('./models/order');
const Customer = require('./models/customer');
const Category = require('./models/category');

// Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const clientRoute = require('./routes/client-route');
const orderRoute = require('./routes/order-route');
const categoryRoute = require('./routes/category-route');
const customerRoute = require('./routes/customer-route');
const chatbotRoute = require('./routes/chatbot-route');

app.use(bodyParser.json({
    limit: '5mb'
}));

app.use(bodyParser.urlencoded({
    extended: false
}));

// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);

app.use('/', indexRoute);
app.use('/product', productRoute);
app.use('/client', clientRoute);
app.use('/order', orderRoute);
app.use('/customer', customerRoute);
app.use('/category', categoryRoute);
app.use('/chatbot', chatbotRoute);

module.exports = app;