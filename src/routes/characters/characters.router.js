const { Router } = require("express");
const getAllCharactersController = require("./getController/getAllCharacters.controller");
const createCharacterController = require("./postController/createCharacter.controller");
const updateCharacterController = require("./putController/updateCharacter.controller");
const characters = Router();

characters.route("/").post(createCharacterController);
characters.route("/").get(getAllCharactersController);
characters.route("/").put(updateCharacterController);

module.exports = characters;
