'use strict';

exports.post = async (req, res, next) => {
    try {

        const accountSid = 'AC654b3e4890838c4a20a3d9aa26695450';
        const authToken = '9353848fab25f5b8a2edc872fce2d78e';
        const client = require('twilio')(accountSid, authToken);

        client.messages.create({
            from: 'whatsapp:+14155238886',
            body: 'Ahoy world!',
            to: 'whatsapp:+5511948572107'
        }).then(message => console.log(message.sid));

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