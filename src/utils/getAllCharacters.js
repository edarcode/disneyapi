const { charactersPerPage } = require("../constants/perPage");
const { Character } = require("../db");

module.exports = {
	getAllCharacters: async ({ page = 0 }) => {
		const { count, rows } = await Character.findAndCountAll({
			offset: charactersPerPage * page,
			limit: charactersPerPage,
			attributes: ["id", "img", "name"]
		});
		const data = {
			pageCount: Math.ceil(count / charactersPerPage),
			charactersPerPage,
			charactersCount: count,
			page: parseInt(page),
			characters: rows
		};
		return data;
	}
};
