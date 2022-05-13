const { getAllGroups } = require("../controller/groups");

module.exports = function (app) {
  app.get("/groups", getAllGroups);
};
