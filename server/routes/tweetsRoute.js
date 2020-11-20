const express = require('express');
const router = express.Router();
const tweetsController = require('../controllers/tweetsController');

// GET /tweets/
router.get('/', tweetsController.getAllTweets);

// export routes
module.exports = router;