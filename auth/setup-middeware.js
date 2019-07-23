//should be in it's own file
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session); //takes whatever you named the express-session

module.exports = server => {

const sessionConfig = {
    name: 'mordor', //change the name to whatever, defaults to sid
    secret: 'keep it secret, keep it safe!', //to encrypt/decrypt the cookie. should be an enviroment variable process.env.secret
    cookie:{
      maxAge: 1000 * 60 * 10, //milliseconds  1000 > 1 second *60 > 1min * 10 > 10 min maxAge: how long it lasts
      secure: false, //true in production
      httpOnly: true, //JS can't access the cookie on the client 
    },
    resave: false, //save the session again even if it didn't change
    saveUninitialized: true,
    store: new KnexSessionStore({ //remember to use new
        knex: require('../database/dbConfig.js'),
        tablename: 'sessions',
        createTable: true,
        sidfieldname: 'sid',
        clearInterval: 1000 * 60 * 60, //every hour deletes expired sessions
    }),
  };
  
  server.use(helmet());
  server.use(express.json());
  server.use(cors());
  server.use(session(sessionConfig)); // >>> turns on sessions

}