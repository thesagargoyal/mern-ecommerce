const express = require('express');
const router = express.Router();

const {getProducts, newProduct, getSingleProduct, updateProduct, deleteProduct} = require('../controllers/productControllers');

router.get('/products',getProducts);
router.post('/admin/product/new',newProduct);
router.get('/product/:id', getSingleProduct);
router.put('/admin/product/:id', updateProduct);
router.route('/admin/product/:id').put(updateProduct).delete(deleteProduct);

module.exports = router;