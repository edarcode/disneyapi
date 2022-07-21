const { Character } = require("../db");

module.exports = {
	deleteCharacter: async ({ id }) => {
		const isDestroy = await Character.destroy({ where: { id } });
		return isDestroy; /* return 0 o 1 */
	}
};
