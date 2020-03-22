const dataService = require('E:\\ReviewDB-Fastify\\reviewdb-data\\index');
const boom = require('boom');

exports.saveReview = async (req, reply) => {
    try {
        return dataService.ReviewService.saveReview(req.body);
    }
    catch (error) {
        throw boom.boomify(error);
    }
}

exports.getAllReviews = async (req, reply) => {
    try {
        return dataService.ReviewService.getReviews();
    }
    catch (error) {
        throw boom.boomify(error);
    }
}

exports.getProductReviews = async (req, reply) => {
    try {
        return dataService.ReviewService.getProductReviews(req.params.id);
    }
    catch (error) {
        throw boom.boomify(error);
    }
}
exports.getreviewsByCategory = async (req, reply) => {

    try {  

        return dataService.ReviewService.getreviewsByCategory(req.params.catId,req.params.limit);
    }
    catch (error) {
        throw boom.boomify(error); 
    } 
}

exports.getUserProductReview = async (req, reply) => {
    try {
        return dataService.ReviewService.getUserProductReview(req.params.prodId, req.params.userId);
    }
    catch (error) {
        throw boom.boomify(error);
    }
}