// import { DataTypes } from "sequelize";
// import { db } from "../utils/db.js";
// import { User } from "./User.js";
const { DataTypes } = require("sequelize");
const { db } = require("../utils/db.js");
const { User } = require("./User.js");

// export const Token = db.define('tokens', {
const Token = db.define('tokens', {
  refreshToken: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  createdAt: false,
});

Token.belongsTo(User);
User.hasOne(Token);

module.exports = { Token };
