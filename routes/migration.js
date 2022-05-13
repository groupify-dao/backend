const {
  sendEmptySuccess,
  sendCustomStatusCode,
} = require("../handlers/responsehandler");
const dbUtils = require("../utils/db-utils");

module.exports = function (app) {
  app.get("/sync", function (req, res) {
    dbUtils.syncDb().then(
      () => {
        sendEmptySuccess(res);
      },
      (error) => {
        sendCustomStatusCode(res, 500);
        console.log(error);
      }
    );
  });
};
