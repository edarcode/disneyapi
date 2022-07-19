const { Router } = require("express");
const getAllUsersController = require("./getController/getAllUsers.controller");
const users = Router();

users.route("/").get(getAllUsersController);

module.exports = users;
