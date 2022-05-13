const Sequelize = require("sequelize");
const config = require("../config");

const sequelize = new Sequelize("groupify-dao", "root", config.db.password, {
  dialect: "mysql",
  host: "localhost",
  //   logging: false,
});

module.exports = sequelize;
