const { DataTypes } = require("sequelize");
module.exports = sequelize => {
	sequelize.define(
		"Film",
		{
			title: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true
			},
			creationDate: {
				type: DataTypes.DATEONLY /* año-mes-día */,
				allowNull: false
			},
			score: {
				type: DataTypes.REAL,
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
