'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "2BX",
        version: "0.0.1"
    });
});

module.exports = router;