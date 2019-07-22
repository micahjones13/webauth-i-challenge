const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const UserRouter = require('./users/user-router.js');
const RegisterRouter = require('./register/register-router.js');
const LoginRouter = require ('./login/login-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use(express.json());
server.use('/api/users', UserRouter);
server.use('/api/register', RegisterRouter);
// server.use('/api/login', LoginRouter);

module.exports = server;