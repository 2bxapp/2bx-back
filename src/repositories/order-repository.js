'use strict';
const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.get = async () => {
    var res = await Order
        .find({}, 'number status customer items')
        .populate('customer', 'name')
        .populate('items.product', 'title category.name');
    return res;
}

exports.getById = async (id) => {
    var res = await Order
        .findOne({ id: id }, 'number status customer items')
        .populate('customer', 'name')
        .populate('items.product', 'title');
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