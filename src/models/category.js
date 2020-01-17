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
        type: Schema.Types.Map,
        of: String
    },
    eCommerceLinks: {
        type: Schema.Types.Map,
        of: String
    },
    source: {
        type: String, required: true
    },
    source_url: String,
    source_id: String,
});

module.exports = mongoose.model('Category', categorySchema);