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