const fs = require('fs'); // file system module

// json data to read and write
const tweetsFile = './data/tweets.json';

// list tweets array data from json file
function list() {
    const data = fs.readFileSync(tweetsFile);
    return JSON.parse(data);
}

module.exports = {
    list
}