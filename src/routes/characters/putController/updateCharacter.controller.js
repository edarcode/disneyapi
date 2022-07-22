const { updateCharacter } = require("../../../utils/updateCharacter");

const updateCharacterController = async (req, res, next) => {
	try {
		const character = await updateCharacter(req.body);
		if (!character) return res.status(400).json({ msg: "err" });
		res.status(200).json({ msg: "successfully" });
	} catch (error) {
		next(error);
	}
};

module.exports = updateCharacterController;
