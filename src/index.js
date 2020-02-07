// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
});
const cors = require('fastify-cors');

const mongoose = require('mongoose');
const routes = require('./routes');
const mongoString = 'mongodb://fastifyuser:docker123@ds060649.mlab.com:60649/reviewdb';
const swagger = require('./config/swagger');

const dataService = require('E:\\Personal\\fastify\\reviewdb-data\\index');


// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options);

routes.forEach((route, index) => {
    fastify.route(route)
});

// Connect to DB
// mongoose.connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.log(err));

dataService.createConnection(mongoString);

fastify.register(require('fastify-cors'), {
    // put your options here
});

// Declare a route
fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
});

const start = async () => {
    try {
        await fastify.listen(3000);
        fastify.swagger();
        fastify.log.info('Server listening on port');
    }
    catch (err) {
        fastify.log.error(err);
    }
}

start();