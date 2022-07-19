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
				type: DataTypes.INTEGER,
				allowNull: false
			},
			weight: {
				type: DataTypes.REAL,
				allowNull: false
			},
			history: {
				type: DataTypes.STRING,
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
