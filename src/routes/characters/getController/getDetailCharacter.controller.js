const { getDetailCharacter } = require("../../../utils/getDetailCharacter");

const getDetailCharacterController = async (req, res, next) => {
	try {
		const character = await getDetailCharacter(req.params);
		if (!character) return res.status(400).json({ msg: "err" });
		res.status(200).json(character);
	} catch (error) {
		next(error);
	}
};

module.exports = getDetailCharacterController;
