const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {
        type: String
    },
    details: {
        type: String
    },
    value: {
        type: Number
    },
    thumbnail: {
        type: String
    },
    image: {
        type: String
    },
    productId: {
        type: String
    }
});

module.exports = schema