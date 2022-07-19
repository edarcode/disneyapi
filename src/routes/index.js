const { Router } = require("express");
const auth = require("./auth/auth.router");
const characters = require("./characters/characters.router");
const users = require("./users/users.router");
const router = Router();

router.use("/users", users);
router.use("/auth", auth);
router.use("/characters", characters);

module.exports = router;
