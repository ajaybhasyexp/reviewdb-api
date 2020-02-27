const path = require('path')
const dataService = require(path.join(__dirname,'../../../reviewdb-data/index'));
const boom = require('boom');

exports.getProducts = async (req, reply) => {
    try {
        let result = dataService.ProductService.getProduct(req.params.search);
        return result;
    }
    catch (error) {
        throw boom.boomify(error);
    }
}

exports.getAllProducts = async (req, reply) => {
    try {
        return dataService.ProductService.getAllProducts();
    }
    catch (error) {
        throw boom.boomify(error);
    }
}

exports.getProductsById = async (req, reply) => {
    try {
        return dataService.ProductService.getProductById(req.params.id);
    }
    catch (error) {
        throw boom.boomify(error);
    }
}