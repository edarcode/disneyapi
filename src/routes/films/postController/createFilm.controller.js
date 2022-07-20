const { createFilm } = require("../../../utils/createFilm");

const createFilmController = async (req, res, next) => {
	try {
		const film = await createFilm(req.body);
		if (!film) return res.status(200).json({ msg: "err" });
		res.status(201).json({ msg: "successfully" });
	} catch (error) {
		next(error);
	}
};

module.exports = createFilmController;
