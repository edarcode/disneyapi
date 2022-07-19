const { createCharacter } = require("../../../utils/createCharacter");

const createCharacterController = async (req, res, next) => {
	try {
		const character = await createCharacter(req.body);
		if (!character)
			return res.status(200).json({ msg: "already exists", character });
		res.status(201).json({ msg: "successfully", character });
	} catch (error) {
		next(error);
	}
};

module.exports = createCharacterController;
