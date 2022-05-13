const Sequelize = require("sequelize");
const sequelize = require("../handlers/databashandler");

const Group = sequelize.define("groups", {
  target_url: { type: Sequelize.STRING, allowNull: false },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

module.exports = Group;
