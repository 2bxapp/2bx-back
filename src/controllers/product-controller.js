'use strict';

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/product-repository');

exports.get = async (req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Failed to process requisition'
        });
    }
}

exports.getBySlug = async (req, res, next) => {
    try {
        var data = await repository.getBySlug(req.params.slug);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Failed to process requisition'
        });
    }
}

exports.getById = async (req, res, next) => {
    try {
        var data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Failed to process requisition'
        });
    }
}

exports.getByTag = async (req, res, next) => {
    try {
        const data = await repository.getByTag(req.params.tag);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Failed to process requisition'
        });
    }
}

exports.getByCategory = async (req, res, next) => {
    try {
        const data = await repository.getByCategory(req.params.category);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Failed to process requisition'
        });
    }
}

exports.post = async (req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.title, 3, 'Title must contain minimum of 3 characteres');
    contract.hasMinLen(req.body.slug, 3, 'Title must contain minimum of 3 characteres');
    contract.hasMinLen(req.body.description, 3, 'Title must contain minimum of 3 characteres');

    // Se os dados forem inválidos
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        // Cria o Blob Service
        // const blobSvc = azure.createBlobService(config.containerConnectionString);

        // let filename = guid.raw().toString() + '.jpg';
        // let rawdata = req.body.image;
        // let matches = rawdata.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        // let type = matches[1];
        // let buffer = new Buffer(matches[2], 'base64');

        // // Salva a imagem
        // await blobSvc.createBlockBlobFromText('product-images', filename, buffer, {
        //     contentType: type
        // }, function (error, result, response) {
        //     if (error) {
        //         filename = 'default-product.png'
        //     }
        // });

        await repository.create({
            title: req.body.title,
            slug: req.body.slug,
            description: req.body.description,
            price: req.body.price,
            active: true,
            tags: req.body.tags,
            image: req.body.image,
            thumbnail: req.body.thumbnail,
            category: req.body.category
        });
        res.status(201).send({
            message: 'Product successfully created!'
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Failed to process requisition'
        });
    }
};

exports.patch = async (req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: 'Product successfully updated!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Failed to process requisition'
        });
    }
};

exports.delete = async (req, res, next) => {
    try {
        await repository.delete(req.body.id)
        res.status(200).send({
            message: 'Product successfully removed!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Failed to process requisition'
        });
    }
};