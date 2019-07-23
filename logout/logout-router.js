const express = require('express');

const Users = require('../users/users-model.js');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.session);
    const username = req.session.username;
    if (req.session) {
      req.session.destroy(err => {  // <<< here we log out 
        if (err){
          res.status(500).json({ message: "ran into a logout error" });
        } else {
          res.json({ message: `Goodbye, ${username}!` });
        }
      });
    } else {
      res.json({ message: `Goodbye, ${username}!`});
    }
  });

module.exports = router;