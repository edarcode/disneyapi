const { Film, Character } = require("../db");

module.exports = {
	getDetailFilm: async ({ id }) => {
		const film = await Film.findOne({
			where: { id },
			include: [
				{
					model: Character,
					as: "characters",
					attributes: ["id", "name"],
					through: { attributes: [] }
				}
			],
			distinct: true
		});
		if (!film) return null;
		return film;
	}
};
