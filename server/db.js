'use strict'
var Sequelize = require('sequelize');

var sequelize = new Sequelize('tictactoe', 'root', '1', {logging: false});

var User = sequelize.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
});

var History = sequelize.define('history', {
  // opponent: Sequelize.STRING, -> should be a foreign key
  result: Sequelize.FLOAT
});

User.hasMany(History);

History.belongsTo(User, {as: 'opponent'});

History.belongsTo(User, {
  as: 'user'
});

sequelize.sync();

module.exports = {
  User: User,
  History: History
};
