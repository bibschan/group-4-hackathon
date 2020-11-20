const fs = require('fs'); // file system module

// json data to read and write
const tweetsFile = './data/tweets.json';

// list tweets array data from json file
function list() {
    const data = fs.readFileSync(tweetsFile);
    return JSON.parse(data);
}

function postATweet(tweet){
    const currentContent = list();
    const object = {tweet};
    currentContent.push(object);
    fs.writeFileSync(tweetsFile, JSON.stringify(currentContent));
    return tweet;
}

module.exports = {
    list,
    postATweet
}