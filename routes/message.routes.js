const express = require('express');
const { sendMessage } = require('../controller/message.controller');

const router = new express.Router();

// route for sending message with ID
router.post('/send/:id',sendMessage)

module.exports = router;