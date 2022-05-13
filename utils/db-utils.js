const sequelize = require("../handlers/databashandler");

var dbUtils = {
  syncDb: function () {
    return sequelize.sync({ force: true });
  },
};
module.exports = dbUtils;
