const { charactersPerPage } = require("../constants/perPage");
const { Character, Film, Op } = require("../db");

module.exports = {
	getAllCharacters: async ({ page = 0, name, age, weight, movie }) => {
		const { count, rows } = await Character.findAndCountAll({
			where: where({ name, age, weight }),
			offset: charactersPerPage * page,
			limit: charactersPerPage,
			attributes: ["id", "img", "name"],
			include: include({ movie }),
			distinct: true
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

function where({ name, age, weight }) {
	const result = {};
	if (name) result.name = { [Op.iLike]: `%${name}%` };
	if (age) {
		if (age === "null") {
			result.age = null;
		} else {
			result.age = age;
		}
	}
	if (weight) {
		if (weight === "null") {
			result.weight = null;
		} else {
			result.weight = weight;
		}
	}
	return result;
}
function include({ movie }) {
	const result = [];
	if (movie) {
		result.push({
			model: Film,
			as: "films",
			where: { id: movie },
			attributes: [],
			through: { attributes: [] }
		});
	}
	return result;
}
