const path = require('path')
const dataService = require('E:\\ReviewDB-Fastify\\reviewdb-data\\index');
const boom = require('boom');

exports.getUsers = async (req, reply) => {
    try {
        const user_list = dataService.UserService.getAllUsers();
        return user_list;
    }
    catch (err) {
        throw boom.boomify(err);
    }
}

exports.saveUser = async (req, reply) => {
    try {
        dataService.UserService.checkAndSaveUser(req.body);
    }
    catch (err) {
        throw boom.boomify(err);
    }
}

exports.getUser = async (req, reply) => {
    try {
        return dataService.UserService.getUser(req.params.id);
    }
    catch (err) {
        throw boom.boomify(err);
    }
}
