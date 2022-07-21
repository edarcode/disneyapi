const { Character, Film } = require("../db");

module.exports = {
	getDetailCharacter: async ({ id }) => {
		const character = await Character.findOne({
			where: { id },
			attributes: ["id", "name", "age", "weight", "history", "img"],
			include: [
				{
					model: Film,
					as: "films",
					attributes: ["id", "title", "type"],
					through: { attributes: [] }
				}
			]
		});
		if (!character) return null;
		return character;
	}
};
