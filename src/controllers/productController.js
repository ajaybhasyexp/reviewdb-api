const dataService = require('E:\\ReviewDB-Fastify\\reviewdb-data\\index');
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
exports.getProductByQuery = async (req, reply) => {
    try{
        return dataService.ProductService.getProduct(req.body)
    }catch (error){
        throw boom.boomify(error)
    }
}