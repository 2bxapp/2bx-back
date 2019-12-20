'use strict';
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.create = async (data) => {
    var customer = new Customer(data);
    await customer.save();
}

exports.authenticate = async (data) => {
    const res = await Customer.findOne({
        email: data.email,
        password: data.password
    });
    return res;
}

exports.getById = async (id) => {
    const res = await Customer.findById(id);
    return res;
}

exports.update = async (id, data) => {
    await Customer
        .findByIdAndUpdate(id, {
            $set: {
                nickname: data.nickname,
                name: data.name,
                password: data.password,
                document: data.document,
                address: data.address,
                streetNumber: data.streetNumber,
                neighborhood: data.neighborhood,
                addressComplement: data.addressComplement,
                state: data.state,
                country: data.country,
                zipcode: data.zipcode,
                phone: data.phone
            }
        });
}

exports.delete = async (id) => {
    await Customer
        .findOneAndRemove(id);
}