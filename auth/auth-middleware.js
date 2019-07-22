const bcrypt = require('bcryptjs');
const Users = require('../users/users-model.js');

module.exports = function auth (req, res, next) {
    const { username, password } = req.headers;
  
    Users.findBy({ username })
    .first()
    .then(user => {
      if(user && bcrypt.compareSync(password, user.password)) {
        next();
      } else {
        res.status(401).json({ messsage: 'You are not logged in!' });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
  }