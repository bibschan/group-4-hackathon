const tweets = require('../models/tweetsModel');

function getAllTweets(_req, res) {
    res.status(200).json(tweets.list());
}

module.exports = {
    getAllTweets,
}