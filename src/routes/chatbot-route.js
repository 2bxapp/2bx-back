'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/chatbot-controller');

router.post('/incoming', controller.post);
router.get('/', controller.get);

module.exports = router;