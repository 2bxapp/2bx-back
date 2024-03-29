'use strict';
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async () => {
    const res = await Product.find({
        active: true
    }, 'title price description thumbnail image');
    return res;
}

exports.getBySlug = async (slug) => {
    const res = await Product
        .findOne({
            slug: slug,
            active: true
        }, 'title description price image thumbnail');
    return res;
}

exports.getById = async (id) => {
    const res = await Product
        .findById(id);
    return res;
}

exports.getByTag = async (tag) => {
    const res = Product
        .find({
            tags: tag,
            active: true
        }, 'title description price tags');
    return res;
}


exports.getByCategory = async (category) => {
    const res = Product
        .find({
            category: category,
            active: true
        }, 'title description price tags image');
    return res;
}

exports.create = async (data) => {
    var product = new Product(data);
    await product.save();
}

exports.update = async (id, data) => {
    await Product
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                description: data.description,
                price: data.price,
                slug: data.slug,
                image: data.image,
                thumbnail: data.thumbnail,
                tag: data.tags,
            }
        });
}

exports.delete = async (id) => {
    await Product
        .findOneAndRemove(id);
}