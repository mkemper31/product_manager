const products = require('../controllers/products.js');
const path = require('path');
module.exports = (app) => {
    // Get all products
    app.get('/products', products.all);
    // Get one product by ID
    app.get('/products/:id', products.getOneById);
    // Create a new product
    app.post('/products/create', products.create);
    // Update a product by ID, passing in data
    app.put('/products/:id', products.update);
    // Delete a product by ID
    app.delete('/products/:id', products.delete);
    // Catchall for malformed requests
    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('./public/dist/public/index.html'));
    });
}
