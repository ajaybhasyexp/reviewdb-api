const mongooose = require('mongoose');
const actionUser = require('./subschemas/actionuser');
const Schema = mongooose.Schema;

const userSchema = new Schema({
    userName: String,
    password: String,
    createdBy: actionUser
});

module.exports = mongooose.model('User', userSchema); 