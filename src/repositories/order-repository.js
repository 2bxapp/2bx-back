'use strict';
const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.get = async () => {
    var res = await Order
        .find({}, 'number status customer table createdAt closed items')
        .populate('customer', 'name')
        .populate([
            {
                path: 'items.product',
                select: 'title',
                populate: {
                    path: 'category',
                    select: 'name image'
                }
            }
        ])
    return res;
}

exports.getByStatus = async (status) => {
    var res = await Order
        .find({ status: status }, 'number status customer table createdAt closed items')
        .populate('customer', 'name')
        .populate([
            {
                path: 'items.product',
                select: 'title',
                populate: {
                    path: 'category',
                    select: 'name image'
                }
            }
        ])

    return res;
}

exports.getByCustomer = async (customer) => {
    var res = await Order
        .find({ customer: customer }, 'number status customer createdAt closed items')
        .sort({ createdAt: -1 })
        .populate('customer', 'name')
        .populate([
            {
                path: 'items.product',
                select: 'title',
                populate: {
                    path: 'category',
                    select: 'name image'
                }
            }
        ])
    return res;
}

exports.getById = async (id) => {
    var res = await Order
        .findOne({ _id: id }, 'number status customer closed items')
        .populate('customer', 'name')
        .populate([
            {
                path: 'items.product',
                select: 'title',
                populate: {
                    path: 'category',
                    select: 'name image'
                }
            }
        ]);
    return res;
}

exports.create = async (data) => {
    var order = new Order(data);
    await order.save();
}

exports.update = async (id, data) => {
    await Product
        .findByIdAndUpdate(id, {
            $set: {
                status: data.status,
                items: data.items,
                statusMotive: data.statusMotive,
                updatedAt: Date.now
            }
        });
}
