const { Character } = require("../db");

module.exports = {
	createCharacter: async ({ name, age, weight, history, img, films }) => {
		const [character, created] = await Character.findOrCreate({
			where: { name },
			defaults: {
				age,
				weight,
				history,
				img
			}
		});
		if (!created) return null;
		films && (await character.setFilms(films));
		return character;
	}
};
