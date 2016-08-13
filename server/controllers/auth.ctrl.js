var db = require('../db');
var User = db.User;

var registerUser = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  User.findOne({ where: { username: username } })
    .then(function(user) {
      if (user) {
        return res.send(409);
      }
      User.create({username: username, password: password});
    });
};

module.exports = {
  registerUser: registerUser,
};
