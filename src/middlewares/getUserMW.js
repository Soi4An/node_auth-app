// import { ErrorApi } from '../exceptions/ErrorApi.js';
// import { jwtService } from '../services/jwtService.js';
const { ErrorApi } = require('../exceptions/ErrorApi.js');
const { jwtService } = require('../services/jwtService.js');

// export function getUserMW(req, res, next) {
function getUserMW(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    throw ErrorApi.Unauthorized();
  }

  const [, accessToken] = authHeader.split(' ');

  if (!accessToken) {
    throw ErrorApi.Unauthorized();
  }

  const decodedUser = jwtService.validateAccessToken(accessToken);

  if (!decodedUser) {
    throw ErrorApi.Unauthorized();
  }

  req.user = decodedUser;

  next();
}

module.exports = { getUserMW };
