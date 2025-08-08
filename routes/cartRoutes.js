const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const { adminAuth, userAuth } = require('../middleware/userAuth')

router.post('/', userAuth, cartController.createCart);
router.get('/cartInfo',userAuth,adminAuth, cartController.cartInfo);
router.get('/cartInfo/:id',userAuth,adminAuth, cartController.BycartDeatils);
router.get('/', userAuth,adminAuth, cartController.viewCart);
router.get('/:id',userAuth, cartController.cartById);
router.put('/:id', userAuth, cartController.updateCart);
router.delete('/:id', userAuth, cartController.deleteCart);

// router.post('/', cartController.createCart);
// router.get('/cartInfo', cartController.cartInfo);
// router.get('/cartInfo/:id', cartController.BycartDeatils);
// router.get('/', cartController.viewCart);
// router.get('/:id', cartController.cartById);
// router.put('/:id', cartController.updateCart);
// router.delete('/:id', cartController.deleteCart);



module.exports = router