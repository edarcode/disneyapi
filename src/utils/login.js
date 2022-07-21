const { User } = require("../db");
const { comparePassword } = require("./comparePassword");

module.exports = {
	login: async ({ email, password }) => {
		const user = await User.findOne({
			where: { email }
		});
		const isAuth = await comparePassword(password, user.password);
		if (!isAuth) return null;
		return user;
	}
};
