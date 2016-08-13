var db = require('../db');
var User = db.User;

var registerUser = function(req, res) {
  res.send('still working');
};

module.exports = {
  registerUser: registerUser,
};
