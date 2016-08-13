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
      var hash = User.instanceMethods.generateHash(password);
      User.create({username: username, password: hash})
        .then((user) => {
          res.send(user);
        });
    });
};

var test = function(req, res) {
  res.send('this works');
};

module.exports = {
  registerUser: registerUser,
  test: test
};
