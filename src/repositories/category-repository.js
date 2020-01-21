'use strict';

const mongoose = require('mongoose');
const Category = mongoose.model('Category');

exports.get = async () => {
    var res = await Category
        .find({}, '_id image description name')
        .populate('client', 'name')
        .populate('products');
    return res;
}

exports.getByName = async (name) => {
    var res = await Category
        .find({ name: { $regex: new RegExp(name, "i") } }, 'description thumbnail image')
        .populate('products')
        .populate('client', 'name')
    return res;
}

exports.create = async (data) => {
    var category = new Category(data);
    await category.save();
}

exports.update = async (id, data) => {
    await Category
        .findByIdAndUpdate(id, {
            $set: {
                name: data.name,
                description: data.description,
                thumbnail: data.thumbnail,
                image: data.image,
            }
        });
}