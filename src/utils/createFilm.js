const { Film } = require("../db");

module.exports = {
	createFilm: async ({ title, creationDate, img, genres, type }) => {
		const [film, created] = await Film.findOrCreate({
			where: { title },
			defaults: { creationDate, img, type }
		});
		if (!created) return null;
		await film.setGenres(genres);
		return film;
	}
};
