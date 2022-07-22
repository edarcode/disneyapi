const { Router } = require("express");
const { tokenValidate } = require("../middlewares/tokenValidate");
const auth = require("./auth/auth.router");
const characters = require("./characters/characters.router");
const films = require("./films/films.router");
const genres = require("./genres/genres.router");
const users = require("./users/users.router");
const router = Router();

router.use("/auth", auth);
router.use(tokenValidate);
router.use("/users", users);
router.use("/genres", genres);
router.use("/movies", films);
router.use("/characters", characters);

module.exports = router;
