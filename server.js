const express = require('express');

const setUpGlobalMiddleware = require('./auth/setup-middeware.js');
const UserRouter = require('./users/user-router.js');
const RegisterRouter = require('./register/register-router.js');
const LoginRouter = require ('./login/login-router.js');
const LogoutRouter = require('./logout/logout-router.js');

const server = express();

setUpGlobalMiddleware(server);



;
server.use('/api/users', UserRouter);
server.use('/api/register', RegisterRouter);
server.use('/api/login', LoginRouter);
server.use('/api/logout', LogoutRouter);

module.exports = server;