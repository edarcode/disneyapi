const { Film } = require("../db");

module.exports = {
	updateFilm: async ({ id, title, creationDate, score, img, type, genres }) => {
		const film = await Film.findByPk(id);
		if (!film) return null;
		await film.update({
			title,
			creationDate,
			score,
			img,
			type
		});
		await film.save();
		genres && (await film.setGenres(genres));
		return film;
	}
};
