'use strict';

const repository = require('../repositories/category-repository');
const guid = require('guid');
const authService = require('../services/auth-service');

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

exports.getByName = async (req, res, next) => {
    try {
        var data = await repository.getByName(req.params.name);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Failed to process requisition'
        });
    }
}

exports.post = async (req, res, next) => {
    try {
        await repository.create(req.body);
        res.status(201).send({
            message: 'Order successfully created!'
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
            message: 'Order successfully updated!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Failed to process requisition'
        });
    }
};