'use strict';

var authRouter = require('express').Router();
var authCtrl = require('../controllers/auth.ctrl');

authRouter.route('/register')
  .get(authCtrl.registerUser);

module.exports = authRouter;
