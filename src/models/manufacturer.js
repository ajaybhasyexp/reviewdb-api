const mongoose = require('mongoose');
const actionUser = require('./subschemas/actionuser');
const category = require('./subschemas/category');
const product = require('./subschemas/product');
const Schema = mongoose.Schema;

const manufactureSchema = new Schema({
    name: String,
    description: String,
    createdBy: actionUser,
    categories: [category],
    products: [product]
});

module.exports = mongoose.model('Manufacturer', manufactureSchema);