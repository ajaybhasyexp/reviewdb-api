const dataService = require('E:\\Personal\\fastify\\reviewdb-data\\index');
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
        var product = await dataService.ProductService.getProductById(req.params.id);
        var promAvg = await dataService.ProductService.getAverageReview(req.params.id);
        if (promAvg != undefined && promAvg.length > 0)
            product.set('avgRating', promAvg[0].ratingavg, { strict: false });
        else
            product.set('avgRating', 0, { strict: false });
        return product;
    }
    catch (error) {
        throw boom.boomify(error);
    }

}
exports.getProductByQuery = async (req, reply) => {
    try {
        return dataService.ProductService.getProduct(req.body)
    } catch (error) {
        throw boom.boomify(error)
    }
}
exports.getProductByCategory = async (req, reply) => {
    try {
        return dataService.ProductService.getProductByCategory(req.params.catId, req.params.limit)
    } catch (error) {
        throw boom.boomify(error)
    }
} 