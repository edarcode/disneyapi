const { Router } = require("express");
const getAllGenresController = require("./getController/getAllGenres");
const createGenreController = require("./postController/createGenre.controller");
const genres = Router();

genres.route("/").post(createGenreController);
genres.route("/").get(getAllGenresController);

module.exports = genres;
