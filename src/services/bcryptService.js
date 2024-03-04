// import bcrypt from 'bcrypt';
const bcrypt = require('bcrypt');

async function getHash(password) {
  return await bcrypt.hash(password, 10);
}

async function isEquel(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}

module.exports = { bcryptService: { getHash, isEquel } };
// export const bcryptService = {
//   getHash,
//   isEquel,
// };
