const { Router } = require("express");
const createGenreController = require("./postController/createGenre.controller");
const genres = Router();

genres.route("/").post(createGenreController);

module.exports = genres;
