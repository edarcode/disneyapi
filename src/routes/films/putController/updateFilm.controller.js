const { updateFilm } = require("../../../utils/updateFilm");

const updateFilmController = async (req, res, next) => {
	try {
		const film = await updateFilm(req.body);
		if (!film) return res.status(400).json({ msg: "err" });
		res.status(200).json({ msg: "successfully" });
	} catch (error) {
		next(error);
	}
};

module.exports = updateFilmController;
