const express = require('express');
const authRouter = express.Router();
const { signupController } = require('../controllers/authController');

authRouter.get('/signup',signupController);
module.exports = authRouter;