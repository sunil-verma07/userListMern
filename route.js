const express = require('express');
const { getUser } = require('./controller');
const Router = express();


Router.get('/',getUser)

module.exports = Router