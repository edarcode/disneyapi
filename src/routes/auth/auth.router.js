const { Router } = require("express");
const loginController = require("./postController/login.controller");
const registerController = require("./postController/register.controller");
const auth = Router();

auth.route("/login").post(loginController);
auth.route("/register").post(registerController);

module.exports = auth;
