// import { ErrorApi } from "../exceptions/ErrorApi.js";
const { ErrorApi } = require('../exceptions/ErrorApi.js');

// export function errorMW(error, req, res, next) {
function errorMW(error, req, res, next) {
  if (error instanceof ErrorApi) {
    const { status, message, errors } = error;

    res.status(status).send({ message, errors });
    return;
  }

  console.log(error);

  res.status(500).send({
    message: 'Unexpected error',
  });
}

module.exports = { errorMW };
