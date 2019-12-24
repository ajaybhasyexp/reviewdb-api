const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String, required: true
    },
    desc: {
        type: String
    },
    attributes: {
        type: Map,
        of: String
    },
    eCommerceLinks: {
        type: Map,
        of: String
    }
});

module.exports = categorySchema;