'use strict';

var authRouter = require('express').Router();
var authCtrl = require('../controllers/auth.ctrl');

authRouter.route('/register')
  .post(authCtrl.registerUser);

authRouter.route('/login')
  .post(authCtrl.login);

module.exports = authRouter;
