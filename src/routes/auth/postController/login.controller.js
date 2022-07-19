const { createToken } = require("../../../utils/createToken");
const { login } = require("../../../utils/login");

const loginController = async (req, res, next) => {
	try {
		const user = await login(req.body);
		if (!user) return res.status(401).json({ msg: "Unauthorized" });
		const token = createToken({ id: user.id });
		res.status(200).json({ token });
	} catch (error) {
		next(error);
	}
};

module.exports = loginController;
