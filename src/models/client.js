'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    document: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    streetNumber: {
        type: String,
        required: true
    },
    neighborhood: {
        type: String,
        required: true
    },
    addressComplement: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }],
});

module.exports = mongoose.model('Client', schema);