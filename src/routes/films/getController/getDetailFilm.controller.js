const { getDetailFilm } = require("../../../utils/getDetailFilm");

const getDetailFilmController = async (req, res, next) => {
	try {
		const film = await getDetailFilm(req.params);
		if (!film) return res.status(400).json({ msg: "err" });
		res.status(200).json(film);
	} catch (error) {
		next(error);
	}
};

module.exports = getDetailFilmController;
