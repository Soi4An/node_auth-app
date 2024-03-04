import { db } from "./utils/db.js";
import { Token } from "./models/Token.js";
import { User } from "./models/User.js";

db.sync({ force: true });
// User.sync({ force: true });
// Token.sync({ force: true });


//#region Creating of secret keys in .env
// import dotenv from 'dotenv';
// import fs from 'fs';
// import crypto from 'crypto';

// const envConfig = dotenv.parse(fs.readFileSync('.env'));
// const newSecretKeys = {
//   JWT_ACCESS_SECRET: crypto.randomBytes(32).toString('hex'),
//   JWT_REFRESH_SECRET: crypto.randomBytes(32).toString('hex'),
// };

// Object.assign(envConfig, newSecretKeys);

// const newEnvContent = Object.entries(envConfig)
//   .map(([key, value]) => `${key}=${value}`)
//   .join('\n');

// fs.writeFileSync('.env', newEnvContent);
//#endregion
