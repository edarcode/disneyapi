const { Genre } = require("../db");

module.exports = {
	getAllGenres: async () => {
		const genres = await Genre.findAll();
		if (!genres.length) return null;
		return genres;
	}
};
