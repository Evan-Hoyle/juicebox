require('dotenv').config();

const PORT = 3000;
const express = require('express');
const server = express();

const bodyParser = require('body-parser');
server.use(bodyParser.json());

const morgan = require('morgan');
server.use(morgan('dev'));

const { client } = require('./DataBase');
const apiRouter = require('./api');

server.use('/api', apiRouter)

client.connect();

server.listen(PORT, () => {
  
});