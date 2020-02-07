const manController = require('../controllers/manufacturerController');
const userController = require('../controllers/userController');
const ecommerceController = require('../controllers/ecommerceController');
const categoryController = require('../controllers/categoryController');
const productController = require('../controllers/productController');

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
        method: 'GET',
        url: '/api/manufacturers/:id',
        handler: manController.getManufacturerById
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
    },
    {
        method: 'POST',
        url: '/api/ecommercevendors',
        handler: ecommerceController.addEcomVendor
    },
    {
        method: 'GET',
        url: '/api/ecommercevendors',
        handler: ecommerceController.getAllVendors
    },
    {
        method: 'GET',
        url: '/api/ecommercevendors/:name',
        handler: ecommerceController.getEcomVendor
    },
    {
        method: 'GET',
        url: '/api/categories',
        handler: categoryController.getCategories
    },
    {
        method: 'GET',
        url: '/api/products/:search',
        handler: productController.getProducts
    },
    {
        method: 'GET',
        url: '/api/products',
        handler: productController.getAllProducts
    },
];

module.exports = routes;