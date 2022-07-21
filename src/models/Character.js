const { DataTypes } = require("sequelize");
module.exports = sequelize => {
	sequelize.define(
		"Character",
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true
			},
			age: {
				type: DataTypes.INTEGER
			},
			weight: {
				type: DataTypes.REAL
			},
			history: {
				type: DataTypes.TEXT,
				allowNull: false
			},
			img: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					isUrl: true
				}
			}
		},
		{ timestamps: false }
	);
};
