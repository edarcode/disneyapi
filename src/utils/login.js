const { User } = require("../db");
const { comparePassword } = require("./comparePassword");

module.exports = {
	login: async ({ email, password }) => {
		if (!email || !password) return null;
		const user = await User.findOne({
			where: { email }
		});
		if (!user) return null;
		const isAuth = await comparePassword(password, user.password);
		if (!isAuth) return null;
		return user;
	}
};
