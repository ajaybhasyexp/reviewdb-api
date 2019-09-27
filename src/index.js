// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
});

const mongoose = require('mongoose');
const routes = require('./routes');
const mongoString = 'mongodb://ajaybhasy:docker123@ds060649.mlab.com:60649/reviewdb';

routes.forEach((route, index) => {
    fastify.route(route)
});

// Connect to DB
mongoose.connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Declare a route
fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
});

const start = async () => {
    try {
        await fastify.listen(3000);
        fastify.log.info('Server listening on port');
    }
    catch (err) {
        fastify.log.error(err);
    }
}

start();