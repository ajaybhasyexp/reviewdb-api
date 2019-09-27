const boom = require('boom');
const Manufacturer = require('../models/manufacturer');

exports.getManufacturers = async (req, reply) => {
    try {
        const man_list = await Manufacturer.find();
        return man_list;
    }
    catch (error) {
        throw boom.boomify(error);
    }

};

exports.addManufacturer = async (req, reply) => {
    try {
        const manufacturer = new Manufacturer(req.body);
        return manufacturer.save();
    }
    catch (err) {
        throw boom.boomify(err);
    }
};