const { characters } = require("../data/characters.json");
const { createCharacter } = require("./createCharacter");

module.exports = {
	fillCharacter: async () => {
		for (let i = 0; i < characters.length; i++) {
			const element = characters[i];
			await createCharacter(element);
		}
	}
};
