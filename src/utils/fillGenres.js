const { genres } = require("../data/genres.json");
const { createGenre } = require("./createGenre");

module.exports = {
	fillGenres: async () => {
		for (let i = 0; i < genres.length; i++) {
			const element = genres[i];
			await createGenre(element);
		}
	}
};
