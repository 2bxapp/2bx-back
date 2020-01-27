'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/client-controller');
const authService = require('../services/auth-service');

router.get('/:code', controller.getById);
// router.post('/', controller.post);
// router.patch('/', controller.patch);
router.delete('/', controller.del);

module.exports = router;