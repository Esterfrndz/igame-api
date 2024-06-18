const express = require('express');
const router = express.Router();
const productController = require('/Users/esterfernandez/Desktop/tech-products-api/src/controllers/productController.js');

//Rutas GET

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById); //id
router.get('/category/teclado', productController.getProductsByCategory);
router.get('/category/raton', productController.getProductsByCategoryMouse);
router.get('/category/auricular', productController.getProductsByCategoryHeadphone);




module.exports = router;