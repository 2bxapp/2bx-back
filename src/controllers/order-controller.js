'use strict';

const repository = require('../repositories/order-repository');
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

exports.getById = async (req, res, next) => {
    try {
        var data = await repository.get(res.body.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Failed to process requisition'
        });
    }
}

exports.post = async (req, res, next) => {
    try {
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        const data = await authService.decodeToken(token);

        await repository.create({
            customer: data.id,
            number: guid.raw().substring(0, 6),
            table: req.body.table,
            status: req.body.status,
            items: req.body.items
        });
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