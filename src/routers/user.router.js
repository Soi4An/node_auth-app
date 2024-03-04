// import express from 'express';
// import { userController } from '../controllers/userController.js';
// import { getUserMW } from '../middlewares/getUserMW.js';
// import { ACTIVATION_EMAIL_WAY } from '../defaultConfig.js';
// import { catchErrorMW } from '../middlewares/catchErrorMW.js';
// import { checkChangeEmailBodyMW } from '../middlewares/checkChangeEmailBodyMW.js';
const express = require('express');
const { userController } = require('../controllers/userController.js');
const { getUserMW } = require('../middlewares/getUserMW.js');
const { ACTIVATION_EMAIL_WAY } = require('../defaultConfig.js');
const { catchErrorMW } = require('../middlewares/catchErrorMW.js');
const { checkChangeEmailBodyMW } = require('../middlewares/checkChangeEmailBodyMW.js');

const userRouter = new express.Router();
// export const userRouter = new express.Router();

userRouter.patch(
  '/change-name', catchErrorMW(getUserMW), catchErrorMW(userController.changeName)
);
userRouter.patch(
  '/change-password', catchErrorMW(getUserMW), catchErrorMW(userController.changePassword));

userRouter.post(
  '/confirm-password', catchErrorMW(getUserMW), catchErrorMW(userController.confirmPassword));
userRouter.post(
  '/change-email-request', catchErrorMW(getUserMW), catchErrorMW(userController.changeEmailRequest));
userRouter.patch(
  `/${ACTIVATION_EMAIL_WAY}`,
  catchErrorMW(checkChangeEmailBodyMW),
  catchErrorMW(getUserMW),
  catchErrorMW(userController.activationEmail),
);

module.exports = { userRouter };
