const User = require('../models/user');
const boom = require('boom');

exports.getUsers = async (req, reply) => {
    try {
        const user_list = await User.find();
        return
    }
    catch (err) {
        throw boom.boomify(err);
    }
}

exports.saveUser = async (req, reply) => {
    try {
        const user = new User(req.body);
        return user.save();
    }
    catch (err) {
        throw boom.boomify(err);
    }
}
