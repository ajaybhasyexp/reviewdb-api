const mongoose = require('mongoose');
const actionUser = require('./subschemas/actionuser');
const Schema = mongoose.Schema;

const manufactureSchema = new Schema({
    name: String,
    description: String,
    createdBy: actionUser
});

module.exports = mongoose.model('Manufacturer', manufactureSchema);