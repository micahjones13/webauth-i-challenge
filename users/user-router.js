const express = require('express');

const auth = require('../auth/auth-middleware.js');
const Users = require('../users/users-model.js');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.get('/', auth, (req, res) => {
    
    Users.find()
    .then(users => {
        res.json(users);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})


module.exports = router;