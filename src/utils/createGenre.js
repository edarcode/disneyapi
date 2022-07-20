const { Genre } = require("../db");

module.exports = {
	createGenre: async ({ name, img }) => {
		const [genre, created] = await Genre.findOrCreate({
			where: { name },
			defaults: { img }
		});
		if (!created) return null;
		return genre;
	}
};
