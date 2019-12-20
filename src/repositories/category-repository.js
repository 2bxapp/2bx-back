'use strict';

const mongoose = require('mongoose');
const Category = mongoose.model('Category');

exports.get = async () => {
    var res = await Category
        .find({}, 'image description name')
        .populate('client', 'name')
        .populate('products', 'title image thumbnail price');
    return res;
}

exports.getName = async (name) => {
    var res = await Category
        .find({ name: name }, 'description thumbnail image')
        .populate('client', 'name')
        .populate('products', 'title image thumbnail price');
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