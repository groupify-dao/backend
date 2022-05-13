var responseHandler = {
  sendCustomStatusCode: function (res, statusCode) {
    res.status(statusCode).end();
  },

  sendCustomStatusCodeWithBody: function (res, statusCode, body) {
    res.status(statusCode).json(body);
  },

  sendSuccessWithBody: function (res, body) {
    res.json(body);
  },

  sendUnauthorizedError: function (res) {
    res.status(401).end();
  },

  sendEmptySuccess: function (res) {
    res.status(200).end();
  },

  sendBadRequestError: function (res, body = {}) {
    this.sendCustomStatusCodeWithBody(res, 400, body);
  },
};

module.exports = responseHandler;
