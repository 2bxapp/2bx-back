'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    document: {
        type: String,
    },
    country: {
        type: String,
    },
    state: {
        type: String,
    },
    city: {
        type: String,
    },
    neighborhood: {
        type: String,
    },
    street: {
        type: String,
    },
    phone: {
        type: String,
    },
    addressComplement: {
        type: String,
    },
    streetNumber: {
        type: String,
    },
    zipcode: {
        type: String,
    }
});

module.exports = mongoose.model('Customer', schema);