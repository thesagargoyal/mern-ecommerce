const express = require('express');
const router = express.Router();
const {isAuthenticatedUser}= require('../middlewares/auth');
const {registerUser, loginUser, logout, forgotPassword, resetPassword, getUserProfile} = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logout);
router.post('/password/forgot', forgotPassword);
router.post('/password/reset/:token', resetPassword );
router.get('/me', isAuthenticatedUser, getUserProfile);

module.exports = router;