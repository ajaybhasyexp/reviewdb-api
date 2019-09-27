const manController = require('../controllers/manufacturerController');

const routes = [
    {
        method: 'GET',
        url: '/api/manufacturers',
        handler: manController.getManufacturers
    },
    {
        method: 'POST',
        url: '/api/manufacturers',
        handler: manController.addManufacturer
    }
]

module.exports = routes;