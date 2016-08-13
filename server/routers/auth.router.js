'use strict';

var authRouter = require('express').Router();
var authCtrl = require('../controllers/auth.ctrl');

authRouter.route('/register')
  .post(authCtrl.registerUser)
  .get(authCtrl.test);

module.exports = authRouter;
