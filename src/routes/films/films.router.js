const { Router } = require("express");
const deleteFilmController = require("./deleteController/deleteFilm.controller");
const getAllFilmsController = require("./getController/getAllFilms.controller");
const getDetailFilmController = require("./getController/getDetailFilm.controller");
const createFilmController = require("./postController/createFilm.controller");
const films = Router();

films.route("/").post(createFilmController);
films.route("/:id").get(getDetailFilmController);
films.route("/").get(getAllFilmsController);
films.route("/").delete(deleteFilmController);

module.exports = films;
