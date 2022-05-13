var commonUtils = {
  enablePreFlightCheck: function (req, res, next) {
    if (req.method == "OPTIONS") {
      res.status(200).end();
    } else {
      next();
    }
  },
};

module.exports = commonUtils;
