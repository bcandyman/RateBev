'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Promise.all([
      queryInterface.changeColumn('states', 'name', {
        type: Sequelize.STRING,
        allowNull: false,
      }),
      queryInterface.changeColumn('states', 'abbr', {
        type: Sequelize.STRING,
        allowNull: false,
      }),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await Promise.all([
      queryInterface.changeColumn('states', 'name'),
      queryInterface.changeColumn('states', 'abbr'),
    ]);
  }
};
