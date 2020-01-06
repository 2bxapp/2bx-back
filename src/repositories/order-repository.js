'use strict';
const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.get = async () => {
    var res = await Order
        .find({}, 'number status customer table createdAt items')
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
        .find({ status: status }, 'number status customer table createdAt items')
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
        .findOne({ _id: id }, 'number status customer items')
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
