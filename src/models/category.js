'use strict';

const mongoose = require('mongoose');
const schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    description: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
    },
    image: {
        type: String,
    },
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
});

schema.index({ name: 1, client: 1 }, { unique: true });

module.exports = mongoose.model('Category', schema);