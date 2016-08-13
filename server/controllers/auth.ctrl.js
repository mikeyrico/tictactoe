var db = require('../db');
var User = db.User;

var registerUser = function(req, res) {
  console.log(req.body);
  var username = req.body.username;
  var password = req.body.password;
  User.findOne({ where: { username: username } })
    .then(function(user) {
      if (user) {
        return res.send(409);
      }
      var hash = User.generateHash(password);
      User.create({username: username, password: hash})
        .then((user) => {
          res.send(user);
        });
    });
};

var login = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  User.findOne({ where: { username: username } })
    .then(function(user) {
      if (!user) {
        return res.send(404, 'user doesnt exist');
      }
      // var hash = User.generateHash(password);
      var valid = user.validPassword(password);
      if (!valid) {
        return res.send(404, 'password is incorrect');
      }
      return res.send(200);
    });
};

module.exports = {
  registerUser: registerUser,
  login: login
};
