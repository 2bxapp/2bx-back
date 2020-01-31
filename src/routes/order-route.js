'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/order-controller');
const authService = require('../services/auth-service');

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.get('/customer/:customer', controller.getByCustomer);
router.get('/status/:status', controller.getByStatus);
router.post('/', controller.post);
router.patch('/', controller.patch);

module.exports = router;