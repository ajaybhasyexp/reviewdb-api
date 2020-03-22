const manController = require('../controllers/manufacturerController');
const userController = require('../controllers/userController');
const ecommerceController = require('../controllers/ecommerceController');
const categoryController = require('../controllers/categoryController');
const productController = require('../controllers/productController');
const reviewController = require('../controllers/reviewController');

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
    {
        method: 'GET',
        url: '/api/:id/products',
        handler: productController.getProductsById
    },
    {
        method: 'POST',
        url: '/api/queryproduct',
        handler: productController.getProductByQuery
    },
    {
        method: 'POST',
        url: '/api/reviews',
        handler: reviewController.saveReview
    },
    {
        method: 'GET',
        url: '/api/productsByCategory/:catId/:limit',
        handler: productController.getProductByCategory
    },
    {
        method: 'GET',
        url: '/api/reviewsByCategory/:catId/:limit',
        handler: reviewController.getreviewsByCategory
    },
];

module.exports = routes;