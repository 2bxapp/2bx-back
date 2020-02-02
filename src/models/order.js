'use strict';

const mongoose = require('mongoose');
const schema = mongoose.Schema(
    {
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer'
        },
        number: {
            type: String,
            required: true
        },
        table: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true,
            enum: ['waiting', 'preparing', 'done', 'delivering', 'paid', 'refused', 'cancelled'],
            default: 'waiting'
        },
        statusMotive: {
            type: String
        },
        items: [{
            quantity: {
                type: Number,
                required: true,
                default: 1
            },
            price: {
                type: Number,
                required: true
            },
            observation: {
                type: String
            },
            status: {
                type: String,
                required: true,
                enum: ['waiting', 'preparing', 'done', 'delivering', 'paid', 'refused', 'cancelled'],
                default: 'waiting'
            },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product'
            }
        }],
        closed: {
            type: Boolean,
        }
    },
    {
        timestamps: true
    });

module.exports = mongoose.model('Order', schema);