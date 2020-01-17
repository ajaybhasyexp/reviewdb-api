const boom = require('boom');
const EcommerceVendor = require('../models/ecommercevendor');

exports.addEcomVendor = async (req, reply) => {
    try {
        let ecommerceVendor = new EcommerceVendor(req.body);
        return ecommerceVendor.save();
    }
    catch (error) {
        throw boom.boomify(error);
    }

};

exports.getEcomVendor = async (req, reply) => {
    try {
        let name = req.params.name;
        var vendor = EcommerceVendor.findOne({ "name": name });
        return vendor;
    }
    catch (error) {
        throw boom.boomify(error);
    }
};

exports.getAllVendors = async (req, reply) => {
    try {
        var vendors = EcommerceVendor.find();
        return vendors;
    }
    catch (error) {
        throw boom.boomify(error);
    }
};