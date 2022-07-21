const { Router } = require("express");
const deleteCharacterController = require("./deleteController/deleteCharacter.controller");
const getAllCharactersController = require("./getController/getAllCharacters.controller");
const getDetailCharacterController = require("./getController/getDetailCharacter.controller");
const createCharacterController = require("./postController/createCharacter.controller");
const updateCharacterController = require("./putController/updateCharacter.controller");
const characters = Router();

characters.route("/").post(createCharacterController);
characters.route("/:id").get(getDetailCharacterController);
characters.route("/").get(getAllCharactersController);
characters.route("/").put(updateCharacterController);
characters.route("/").delete(deleteCharacterController);

module.exports = characters;
