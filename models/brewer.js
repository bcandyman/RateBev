const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Brewer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Brewer.belongsTo(models.City, {
        foreignKey: {
          name: 'cityId',
        },
      });
      Brewer.hasMany(models.Brew, {
        onDelete: 'cascade',
      });
    }
  }
  Brewer.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Brewer',
  });
  return Brewer;
};
