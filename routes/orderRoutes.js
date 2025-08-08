const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { adminAuth, userAuth } = require('../middleware/userAuth')

router.get('/', userAuth, adminAuth, orderController.viewOrders);
router.get('/details', userAuth, adminAuth, orderController.allDeatils);
router.post('/', userAuth, orderController.createOrder);
router.put('/:id', userAuth, orderController.updateOrder);
router.get('/:id', userAuth, orderController.orderById)
router.delete('/:id', userAuth, orderController.deleteOrderById)

// router.get('/', orderController.viewOrders);
// router.get('/details', orderController.allDeatils);
// router.post('/',  orderController.createOrder);
// router.put('/:id', orderController.updateOrder);
// router.get('/:id', orderController.orderById)
// router.delete('/:id', orderController.deleteOrderById)


module.exports = router