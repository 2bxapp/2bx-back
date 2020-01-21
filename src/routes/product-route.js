'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');
const authService = require('../services/auth-service');

router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.get('/admin/:id', controller.getById);
router.get('/tags/:tag', controller.getByTag);
router.get('/category/:category', controller.getByCategory);
router.post('/', controller.post);
router.patch('/:id', controller.patch);
router.delete('/', controller.delete);

module.exports = router;