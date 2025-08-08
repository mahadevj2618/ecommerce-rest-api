const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { adminAuth, userAuth } = require('../middleware/userAuth')
const uservalidation = require('../middleware/userValidation')

router.post('/register', uservalidation, userController.creacteUser)
router.get('/', userAuth, adminAuth, userController.viewuser)
router.get('/:id', userAuth, userController.getById)
router.delete('/:id', userAuth, adminAuth, userController.deleteById)
router.put('/:id', userAuth, userController.updateUser)
router.post('/login', userController.login)

// router.post('/', uservalidation, userController.creacteUser)
// router.get('/', userController.viewuser)

// router.get('/:id', userController.getById)
// router.delete('/:id', userController.deleteById)
// router.put('/:id', userController.updateUser)
// router.post('/login', userController.login)


module.exports = router

