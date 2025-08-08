const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { adminAuth, userAuth } = require('../middleware/userAuth')
const validateProduct =require('../middleware/productValidation')



router.get('/',  productController.getAllProducts);

router.get('/:id', userAuth, productController.getById)

router.post('/',  validateProduct, userAuth, adminAuth, productController.creacteProduct)

router.put('/:id',  userAuth, adminAuth, productController.updateProduct)

router.delete('/:id',  userAuth, adminAuth, productController.deleteProduct)

// router.get('/', productController.getAllProducts);

// router.get('/:id',productController.getById)

// router.post('/',  validateProduct, productController.creacteProduct)

// router.put('/:id',  productController.updateProduct)

// router.delete('/:id', productController.deleteProduct)


module.exports = router