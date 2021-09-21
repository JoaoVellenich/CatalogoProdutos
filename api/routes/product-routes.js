const express = require('express');
const {
    addProduct,
    getProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');

const router = express.Router();

router.post('/product', addProduct);
router.get('/product', getAllProducts);
router.get('/product/:id', getProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

module.exports = {
    routes: router
}