const transporter = require("../config/nodemailer");
const { EMAIL_NODEMAILER } = process.env;

module.exports = {
	registerNodemailer: async ({ to }) => {
		await transporter.sendMail({
			from: EMAIL_NODEMAILER,
			to,
			subject: "Disneyapi",
			text: "✔ Registro exitoso 😎 ✔"
		});
	}
};
