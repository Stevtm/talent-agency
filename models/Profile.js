const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//create the Profile model
class Profile extends Model {}

//define table columns and configuration
Profile.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		gender: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		age: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		height: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		weight: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				isDecimal: true,
			},
		},
		eye_colour: {
			type: DataTypes.STRING(10),
			allowNull: false,
		},
		hair_colour: {
			type: DataTypes.STRING(10),
			allowNull: false,
		},
		size: {
			type: DataTypes.INTEGER,
		},
		complexion: {
			type: DataTypes.STRING(10),
		},
		speak_french: {
			type: DataTypes.BOOLEAN,
		},
		speak_spanish: {
			type: DataTypes.BOOLEAN,
		},
		speak_italian: {
			type: DataTypes.BOOLEAN,
		},
		speak_mandarin: {
			type: DataTypes.BOOLEAN,
		},
		skills: {
			type: DataTypes.STRING(100),
		},
		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "user",
				key: "id",
			},
		},
	},
	{
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: "profile",
	}
);

module.exports = Profile;
