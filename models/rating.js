const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Rating.belongsTo(models.Login, {
        foreignKey: {
          name: 'userid',
        },
      });
      Rating.belongsTo(models.Brew, {
        foreignKey: {
          name: 'brewId',
        },
      });
    }
  }
  Rating.init({
    userid: {
      type: DataTypes.UUIDV4,
      allowNull: false,
    },
    brewId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Rating',
  });
  return Rating;
};
