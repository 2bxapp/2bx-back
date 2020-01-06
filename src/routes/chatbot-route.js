'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/chatbot-controller');

router.post('/', controller.post);

module.exports = router;