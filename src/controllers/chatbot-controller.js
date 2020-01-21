'use strict'

const twilio = require('twilio');

const accountSid = 'AC654b3e4890838c4a20a3d9aa26695450';
const authToken = '9353848fab25f5b8a2edc872fce2d78e';

twilio(accountSid, authToken);

const { MessagingResponse } = twilio.twiml;

exports.get = async (req, res, next) => {
    res.status(200).send("Ok");
}

var contacts = [];

exports.post = async (req, res, next) => {
    try {
        const twiml = new MessagingResponse();

        res.set('Content-Type', 'text/xml');

        var result = req.body;

        var has = contacts.filter(x => x == result.From);

        console.log(has);

        if (has == null || has.length == 0) {
            contacts.push(result.From);
            twiml.message('Você é otário ou oq, nem te conheço');
        }
        else {
            twiml.message(result.Body + ' meu ovo');
        }

        res.status(200).send(twiml.toString());

    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Failed to process requisition'
        });
    }
};