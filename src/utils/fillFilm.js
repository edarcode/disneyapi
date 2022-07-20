const { films } = require("../data/films.json");
const { createFilm } = require("./createFilm");

module.exports = {
	fillFilm: async () => {
		for (let i = 0; i < films.length; i++) {
			const element = films[i];
			await createFilm(element);
		}
	}
};
