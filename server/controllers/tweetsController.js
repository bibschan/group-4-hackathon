const tweets = require('../models/tweetsModel');

function getAllTweets(_req, res) {
    res.status(200).json(tweets.list());
}

function postATweet(req,res) {
    if(req.body.tweet !== undefined) {
        let request = tweets.postATweet(req.body.tweet);
        if(request) {
            res.status(201).send(request);
        }
    }
}

module.exports = {
    getAllTweets,
    postATweet
}