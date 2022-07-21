const { deleteCharacter } = require("../../../utils/deleteCharacter");

const deleteCharacterController = async (req, res, next) => {
	try {
		const isDestroy = await deleteCharacter(req.query);
		if (!isDestroy) return res.status(400).json({ msg: "err" });
		res.status(200).json({ msg: "destroy successfully" });
	} catch (error) {
		next(error);
	}
};

module.exports = deleteCharacterController;
