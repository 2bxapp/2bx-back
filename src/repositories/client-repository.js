'use strict';

const mongoose = require('mongoose');
const Client = mongoose.model('Client');

exports.getById = async (id) => {
    var res = await Client
        .findById(id, 'code name document zipcode categories')
        .populate('categories', 'title')
    return res;
}

exports.get = async (data) => {
    var res = await Client
        .find({}, 'code name document zipcode categories')
        .populate('categories', 'title')
    return res;
}

exports.create = async (data) => {
    var order = new Client(data);
    await order.save();
}

exports.update = async (id, data) => {
    await client
        .findByIdAndUpdate(id, {
            $set: {
                name: data.name,
                document: data.document,
                address: data.address,
                number: data.number,
                neighborhood: data.neighborhood,
                addressComplement: data.addressComplement,
                state: data.state,
                zipcode: data.zipcode,
                phone: data.phone
            }
        });
}

exports.delete = async (id) => {
    await Client
        .findOneAndRemove(id);
}