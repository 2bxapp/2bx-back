'use strict';

const repository = require('../repositories/client-repository');

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

exports.del = async (req, res, next) => {
    try {
        await repository.delete(req.body.id)
        res.status(200).send({
            message: 'Client successfully removed!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Failed to process requisition'
        });
    }
};

exports.post = async (req, res, next) => {
    try {
        await repository.create(req.body);
        res.status(201).send({
            message: 'Client successfully created!'
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
            message: 'Client successfully updated!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Failed to process requisition'
        });
    }
}