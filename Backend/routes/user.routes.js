const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const UserController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middlewares');


router.post('/register', [
  body('email').isEmail().withMessage('Invalid Email'),
  body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], UserController.registerUser);


router.post('/login', [
  body('email').isEmail().withMessage('Invalid Email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], UserController.loginUser);

router.get('/profile', authMiddleware.authUser,UserController.getUserProfile);

router.get('/logout', authMiddleware.authUser, UserController.logoutUser);

module.exports = router;
