const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

module.exports = {
	createToken: data => {
		const token = jwt.sign(data, SECRET, { expiresIn: "24h" });
		return token;
	}
};
