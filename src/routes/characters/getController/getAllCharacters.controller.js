const { getAllCharacters } = require("../../../utils/getAllCharacters");

const getAllCharactersController = async (req, res, next) => {
	try {
		const data = await getAllCharacters(req.query);
		res.status(200).json(data);
	} catch (error) {
		next(error);
	}
};

module.exports = getAllCharactersController;
