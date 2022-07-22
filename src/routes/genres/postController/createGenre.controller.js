const { createGenre } = require("../../../utils/createGenre");

const createGenreController = async (req, res) => {
	const genre = await createGenre(req.body);
	if (!genre) return res.status(200).json({ msg: "already exits" });
	res.status(201).json({ msg: "successfully" });
};
module.exports = createGenreController;
