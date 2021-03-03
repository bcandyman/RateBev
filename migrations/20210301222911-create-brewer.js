/* eslint-disable no-multi-spaces */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Brewers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      cityId: {
        // allowNull: false,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
        references: {
          model: 'Cities',    // name of Target model
          key: 'id',          // key in Target model that we're referencing
        },
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Brewers');
  }
};