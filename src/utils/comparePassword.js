const bcrypt = require("bcrypt");

module.exports = {
	comparePassword: async (password, passwordDb) => {
		const isRight = await bcrypt.compare(password, passwordDb);
		return isRight;
	}
};
