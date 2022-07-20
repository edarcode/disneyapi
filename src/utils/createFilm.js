const { Film } = require("../db");

module.exports = {
	createFilm: async ({ title, creationDate, img, genres }) => {
		const [film, created] = await Film.findOrCreate({
			where: { title },
			defaults: { creationDate, img }
		});
		if (!created) return null;
		await film.setGenres(genres);
		return film;
	}
};
