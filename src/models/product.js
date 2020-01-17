const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const categoryRef = require('./subschemas/categoryref');
const actionUser = require('./subschemas/actionuser');
const ecommerceDetails = require('./subschemas/ecommercedetails');

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
    category: [categoryRef],
    ecommerceDetails: [ecommerceDetails]

});
module.exports = mongoose.model('Product', productSchema);