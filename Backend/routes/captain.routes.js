const express = require('express');
const router = express.Router();
const  { body } = require('express-validator');
const captainController = require('../controllers/captain.controller');

router.post('/register', [
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('fullname.lastname').optional().isLength({ min: 3 }).withMessage('Last name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Please fill a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plate').matches(/^[A-Z]{2}\s\d{2}\s[A-Z]{2}\s\d{4}$/)
  .withMessage('Please enter a valid vehicle plate like "UP 66 KY 2023"'),
    body('vehicle.capacity').isInt({ min: 1, max: 10 }).withMessage('Capacity must be between 1 and 10'),
    body('vehicle.vehicleType').notEmpty().withMessage('Vehicle type is required')
], captainController.registerCaptain);

module.exports = router;