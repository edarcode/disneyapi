const { DataTypes } = require("sequelize");
const { movie, serie } = require("../constants/typesFilm");
module.exports = sequelize => {
	sequelize.define(
		"Film",
		{
			type: {
				type: DataTypes.ENUM(movie, serie),
				allowNull: false
			},
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
				allowNull: false,
				defaultValue: 1,
				validate: {
					min: 1,
					max: 5
				}
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
