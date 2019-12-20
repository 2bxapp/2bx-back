'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/category-controller');

router.get('/', controller.get);
router.get('/:name', controller.getByName);
router.patch('/', controller.patch);
router.post('/', controller.post);

module.exports = router;