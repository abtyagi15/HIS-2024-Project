const express = require('express');
const router = express.Router();

const { register,login,verifyOtp } = require('../controllers/Auth');

router.post('/register',register);
router.post('/login',login);
router.post('/verify-email',verifyOtp);

module.exports = router;