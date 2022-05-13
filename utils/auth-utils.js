var jwt = require("jwt-simple");
var config = require("../config");

export function generateToken(payload) {
  return jwt.encode(payload, config.auth.tokenSecret);
}

export function getDataFromToken(token) {
  return jwt.decode(token, config.auth.tokenSecret);
}
