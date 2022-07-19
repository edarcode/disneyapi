const { User } = require("../db");

module.exports = {
	register: async ({ email, password }) => {
		const [user, created] = await User.findOrCreate({
			where: { email },
			defaults: {
				password
			}
		});
		if (!created) return null;
		return user;
	}
};
