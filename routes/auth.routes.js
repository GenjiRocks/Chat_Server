const express = require('express');
const { signup, login, logout } = require('../controller/auth.controller');

const router = new express.Router();



// route for signup
router.post('/signup',signup)

// route for signin
router.post('/signin',login)

// route for logging out
router.post('/logout',logout)

module.exports = router;