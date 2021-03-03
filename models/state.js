const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      State.hasMany(models.City, {
        onDelete: 'cascade',
      });
    }
  }
  State.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    abbr: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'State',
  });
  return State;
};
