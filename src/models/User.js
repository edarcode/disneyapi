const { DataTypes } = require("sequelize");
const { admin, user } = require("../constants/roles");
const { active, inactive } = require("../constants/states");
module.exports = sequelize => {
	sequelize.define(
		"User",
		{
			state: {
				type: DataTypes.ENUM(active, inactive),
				defaultValue: active
			},
			role: {
				type: DataTypes.ENUM(admin, user),
				defaultValue: user
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				validator: {
					isEmail: true
				},
				unique: true
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false
			}
		},
		{ timestamps: false }
	);
};
