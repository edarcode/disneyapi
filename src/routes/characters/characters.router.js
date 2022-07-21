const { Router } = require("express");
const getAllCharactersController = require("./getController/getAllCharacters.controller");
const createCharacterController = require("./postController/createCharacter.controller");
const characters = Router();

characters.route("/").post(createCharacterController);
characters.route("/").get(getAllCharactersController);

module.exports = characters;
