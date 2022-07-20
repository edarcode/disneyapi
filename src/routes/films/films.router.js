const { Router } = require("express");
const createFilmController = require("./postController/createFilm.controller");
const films = Router();

films.route("/").post(createFilmController);

module.exports = films;
