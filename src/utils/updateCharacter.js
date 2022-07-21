const { Character } = require("../db");

module.exports = {
	updateCharacter: async ({ id, name, age, weight, history, img, films }) => {
		const character = await Character.findByPk(id);
		if (!character) return null;
		await character.update({
			name,
			age,
			weight,
			history,
			img
		});
		await character.save();
		if (films) await character.setFilms(films);
		return character;
	}
};
