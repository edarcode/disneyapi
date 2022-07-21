const { destroyTuple } = require("../../../utils/destroyTuple");
const { Character } = require("../../../db");

const deleteCharacterController = async (req, res, next) => {
	try {
		const { id } = req.query;
		const isDestroy = await destroyTuple({ id, model: Character });
		if (!isDestroy) return res.status(400).json({ msg: "err" });
		res.status(200).json({ msg: "destroy successfully" });
	} catch (error) {
		next(error);
	}
};

module.exports = deleteCharacterController;
