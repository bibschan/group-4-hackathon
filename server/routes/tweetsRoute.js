const express = require('express');
const router = express.Router();
const tweetsController = require('../controllers/tweetsController');

// GET /tweets/
router.get('/', tweetsController.getAllTweets);
router.post('/', tweetsController.postATweet)

// export routes
module.exports = router;