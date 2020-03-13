const dataService = require('E:\\Personal\\fastify\\reviewdb-data\\index');
const boom = require('boom');

exports.saveReview = async (req, reply) => {

    try {

        dataService.ReviewService.saveReview(req.body);
    }
    catch (error) {
        throw boom.boomify(error);
    }
}