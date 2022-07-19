const { Router } = require("express");
const createCharacterController = require("./postController/createCharacter.controller");
const characters = Router();

characters.route("/").post(createCharacterController);

module.exports = characters;
