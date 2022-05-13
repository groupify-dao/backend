var config = {
  auth: {
    tokenSecret: process.env.tokenSecret,
    decryptionKey: process.env.decryptionKey,
  },
  db: {
    password: process.env.SQL_password,
  },
};
module.exports = config;
