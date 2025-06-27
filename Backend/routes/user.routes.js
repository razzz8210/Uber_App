const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

router.post('/register', [
  body('email').isEmail().withMessage('Invalid Email'),
  body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // If everything is valid
  res.status(200).json({
    message: "User registered successfully",
    data: req.body // just for testing, you can remove this in production
  });
});

module.exports = router;
