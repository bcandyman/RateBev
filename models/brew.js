const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Brew extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Brew.belongsTo(models.Brewer, {
        foreignKey: {
          name: 'brewerId',
        },
      });
      Brew.belongsTo(models.Style, {
        foreignKey: {
          name: 'styleId',
        },
      });
    }
  }
  Brew.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brewerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    styleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Brew',
  });
  return Brew;
};
