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

exports.getManufacturerById = async (req, reply) => {
    try {
        const manId = req.params.id;
        const manufacturer = await Manufacturer.findById(manId);
        return manufacturer;
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