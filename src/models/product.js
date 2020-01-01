const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const categoryRef = require('./subschemas/categoryref');
const actionUser = require('./subschemas/actionuser');

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdBy: [actionUser],
    category: [categoryRef]

});
module.exports = mongoose.model('Product', productSchema);