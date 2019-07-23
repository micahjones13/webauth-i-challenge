const express = require('express');

const Users = require('../users/users-model.js');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.post('/', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          req.session.username = user.username; //set username only after successful login
          
          res.status(200).json({
            message: `Welcome ${user.username}! You are logged in.`,
          });
        } else {
          res.status(401).json({ message: 'You Shall Not Pass!!!!!!' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
})

module.exports = router;