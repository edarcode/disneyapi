const { register } = require("../../../utils/register");

const registerController = async (req, res, next) => {
	try {
		await register(req.body);
		res.json({ msg: "successfully" });
	} catch (error) {
		error.status = 400;
		next(error);
	}
};

module.exports = registerController;
