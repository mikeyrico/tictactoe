'use strict'
var Sequelize = require('sequelize');
var bcrypt = require('bcrypt-nodejs');

var sequelize = new Sequelize('tictactoe', 'root', '1', {logging: false});

var User = sequelize.define('user', {
  username: Sequelize.STRING,
  password: {
    type: Sequelize.STRING,
    set: (value) => {
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(value, salt);
      console.log('this is >>>>>', this);
      this.setDataValue('password', hash);
    },
  }
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
