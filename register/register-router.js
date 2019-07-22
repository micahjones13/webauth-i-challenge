const express = require('express');

const Users = require('../users/users-model.js');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.post('/', (req, res) => {
  
    let user = req.body;
   
    const hash = bcrypt.hashSync(user.password, 12); //hash it
    user.password = hash; //change it to the hash
    console.log(user.password);
    Users.add(user)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error);
      });
 

});

module.exports = router;