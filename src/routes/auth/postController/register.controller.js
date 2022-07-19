const { register } = require("../../../utils/register");

const registerController = async (req, res, next) => {
	try {
		await register(req.body);
		res.status(200).json({ msg: "successfully" });
	} catch (error) {
		next(error);
	}
};

module.exports = registerController;
