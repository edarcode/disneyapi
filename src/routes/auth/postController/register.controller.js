const { register } = require("../../../utils/register");
const { registerNodemailer } = require("../../../utils/registerNodemailer");

const registerController = async (req, res, next) => {
	try {
		const user = await register(req.body);
		if (!user) return res.status(200).json({ msg: "err" });
		await registerNodemailer({ to: user.email });
		res.status(201).json({ msg: "successfully" });
	} catch (error) {
		next(error);
	}
};

module.exports = registerController;
