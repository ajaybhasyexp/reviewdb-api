const boom = require('boom');
const Category = require('../models/category');

exports.getCategories = async (req, reply) => {
    try {
        const cat_list = await Category.find();
        return cat_list;
    }
    catch (error) {
        throw boom.boomify(error);
    }
};