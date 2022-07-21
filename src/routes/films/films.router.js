const { Router } = require("express");
const getAllFilmsController = require("./getController/getAllFilms.controller");
const getDetailFilmController = require("./getController/getDetailFilm.controller");
const createFilmController = require("./postController/createFilm.controller");
const films = Router();

films.route("/").post(createFilmController);
films.route("/:id").get(getDetailFilmController);
films.route("/").get(getAllFilmsController);

module.exports = films;
