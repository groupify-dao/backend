var responseHandler = require("../handlers/responsehandler");
const Group = require("../models/groups");

let GroupController = {
  getAllGroups: async function (req, res) {
    let groups = await Group.findAll();
    responseHandler.sendSuccessWithBody(res, groups);
  },
};

module.exports = GroupController;
