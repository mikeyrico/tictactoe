'use strict'
var Sequelize = require('sequelize');
var bcrypt = require('bcrypt-nodejs');

var sequelize = new Sequelize('tictactoe', 'root', '1', {logging: false});

var User = sequelize.define('users', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
},
{
  freezeTableName: true,
  instanceMethods: {
      validPassword: function(password) {
          return bcrypt.compareSync(password, this.password);
      },
    }
});

User.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

var History = sequelize.define('histories', {
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
