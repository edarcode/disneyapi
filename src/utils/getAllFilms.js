const { filmsPerPage } = require("../constants/perPage");
const { Film, Genre, Op } = require("../db");

module.exports = {
	getAllFilms: async ({ page = 0, type, name, genre, order }) => {
		const { count, rows } = await Film.findAndCountAll({
			where: where({ type, name }),
			offset: filmsPerPage * page,
			limit: filmsPerPage,
			attributes: ["id", "title", "creationDate", "score", "img", "type"],
			include: include({ genre }),
			distinct: true,
			order: (order && [["creationDate", order]]) || []
		});
		const data = {
			pageCount: Math.ceil(count / filmsPerPage),
			filmsPerPage,
			filmsCount: count,
			page: parseInt(page),
			films: rows
		};
		return data;
	}
};

function where({ type, name }) {
	const result = {};
	if (type) result.type = type;
	if (name) result.title = { [Op.iLike]: `%${name}%` };
	return result;
}
function include({ genre }) {
	const result = [];
	if (genre) {
		result.push({
			model: Genre,
			as: "genres",
			where: { id: genre },
			attributes: [],
			through: { attributes: [] }
		});
	}
	return result;
}
