const { getAllFilms } = require("../../../utils/getAllFilms");

const getAllFilmsController = async (req, res, next) => {
	try {
		const data = await getAllFilms(req.query);
		res.status(200).json(data);
	} catch (error) {
		next(error);
	}
};

module.exports = getAllFilmsController;
