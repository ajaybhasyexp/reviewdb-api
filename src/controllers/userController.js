const path = require('path')
const dataService = require(path.join(__dirname,'../../../reviewdb-data/index'));
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
        // const user = new User(req.body);
        // return user.save();
    }
    catch (err) {
        throw boom.boomify(err);
    }
}
