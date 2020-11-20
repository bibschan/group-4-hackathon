//to start this server (after configuring express), use the npm start command
const express = require('express');
const app = express();
const ora = require('ora');
const cors = require('cors');
const tweetsRoute = require('./routes/tweetsRoute');

require('dotenv').config();
// .env file variables are accessed via process.env object
const { PORT, BACKEND_URL } = process.env;

// Allow CORS
app.use(cors());

// request.body middleware
app.use(express.json());


app.use('/tweets', tweetsRoute);

// console.log(backend_url);
app.listen(PORT, () => {
    ora(`Server started on ${BACKEND_URL}:${PORT}`).start();
});