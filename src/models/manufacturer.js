const mongoose = require('mongoose');
const actionUser = require('./subschemas/actionuser');
const categoryRef = require('./subschemas/categoryref');
const productRef = require('./subschemas/productref');
const product = require('./product');
const Schema = mongoose.Schema;

const manufactureSchema = new Schema({
    name: String,
    description: String,
    createdBy: actionUser,
    categories: [categoryRef],
    products: [productRef]
});

module.exports = mongoose.model('Manufacturer', manufactureSchema);