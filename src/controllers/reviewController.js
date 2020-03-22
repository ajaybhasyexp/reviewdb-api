const dataService = require('E:\\AG\\Works\\Reviews\\reviewdb-data\\index');
const boom = require('boom');

exports.saveReview = async (req, reply) => {

    try {

        dataService.ReviewService.saveReview(req.body);
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