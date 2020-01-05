const manController = require('../controllers/manufacturerController');
const userController = require('../controllers/userController');

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
    },
    {
        method:'GET',
        url:'/api/manufacturers/:id',
        handler:manController.getManufacturerById
    },
    {
        method: 'GET',
        url: '/api/users',
        handler: userController.getUsers
    },
    {
        method: 'POST',
        url: '/api/users',
        handler: userController.saveUser
    }
];

module.exports = routes;