module.exports = function (app) {
  require("./migration.js")(app);
  require("./groups.js")(app);
};
