// import { DataTypes } from "sequelize";
// import { db } from "../utils/db.js";
const { DataTypes } = require("sequelize");
const { db } = require("../utils/db.js");

// export const User = db.define('users', {
const User = db.define('users', {
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  activationToken: {
    type: DataTypes.STRING,
  },
  googleId: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
}) || {};

module.exports = { User };
