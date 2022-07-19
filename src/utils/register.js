const { User } = require("../db");
const { encryptPassword } = require("./encryptPassword");

module.exports = {
	register: async ({ email, password }) => {
		const [user, created] = await User.findOrCreate({
			where: { email },
			defaults: {
				password: await encryptPassword(password)
			}
		});
		if (!created) return null;
		return user;
	}
};
