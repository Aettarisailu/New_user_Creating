const express = require('express');
const { registerUser, loginUser, forgotPassword, resetPassword } = require('../controllers/users.controller.js');

const userRoutes = express.Router();

userRoutes.post('/register', registerUser);
userRoutes.post('/login', loginUser);
userRoutes.post('/forgot-password', forgotPassword);
userRoutes.post('/reset-password', resetPassword);

module.exports = {
  userRoutes
};
