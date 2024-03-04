// import express from 'express';
// import { catchErrorMW } from '../middlewares/catchErrorMW.js';
// import { ErrorApi } from "../exceptions/ErrorApi.js";
// import { User } from '../models/User.js';
// import { userService } from "../services/userService.js";
// import passport from 'passport';
const express = require('express');
const { catchErrorMW } = require('../middlewares/catchErrorMW.js');
const { ErrorApi } = require("../exceptions/ErrorApi.js");
const { User } = require('../models/User.js');
const { userService } = require("../services/userService.js");
const { googlePassport } = require('../utils/googlePassport.js');

// export const googleRouter = new express.Router();
const googleRouter = new express.Router();

googleRouter.get('/auth/google',
  catchErrorMW(googlePassport.authenticate(
    'google', { scope: ['profile', 'email'] },
  )),
);

googleRouter.get('/auth/google/callback',
  catchErrorMW(googlePassport.authenticate(
    'google',
    { failureRedirect: `${process.env.CLIENT_URL}/login` }),
    async function (req, res) {
      const { id, displayName, emails } = req.user;
      const googleEmail = emails[0].value;

      console.log('------server------', id, displayName, emails);

      if (!id || !displayName || !emails || !googleEmail) {
        throw ErrorApi.BadRequest('Google gave bad data');
      }

      let foundUser = await userService.getByGoogleId(id);

      if (foundUser) {
        foundUser.name = displayName;
        foundUser.email = googleEmail;
        await foundUser.save();
      } else {
        foundUser = await User.create({
          googleId: id,
          name: displayName,
          email: googleEmail,
        });
      }

      res.send(userService.normalize(foundUser));
      res.redirect(`${process.env.CLIENT_URL}/profile`);
    },
  ));

  module.exports = { googleRouter };

///////////////////////////////////////////////////////////
  // authRouter.get("/login/success", (req, res) => {
// 	if (req.user) {
// 		res.status(200).json({
// 			error: false,
// 			message: "Successfully Loged In",
// 			user: req.user,
// 		});
// 	} else {
// 		res.status(403).json({ error: true, message: "Not Authorized" });
// 	}
// });

// authRouter.get("/login/failed", (req, res) => {
// 	res.status(401).json({
// 		error: true,
// 		message: "Log in failure",
// 	});
// });

// router.get("/logout", (req, res) => {
// 	req.logout();
// 	res.redirect(process.env.CLIENT_URL);
// });