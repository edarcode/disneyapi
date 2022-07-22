const { getAllGenres } = require("../../../utils/getAllGenres");

const getAllGenresController = async (req, res, next) => {
	try {
		const genres = await getAllGenres();
		if (!genres) return res.status(404).json({ msg: "not found" });
		res.status(200).json(genres);
	} catch (error) {
		next(error);
	}
};

module.exports = getAllGenresController;
