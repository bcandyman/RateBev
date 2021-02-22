'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(
      'states',
      'state',
      {
        type: Sequelize.STRING,
        allowNull: false,
      },
    );
    await queryInterface.changeColumn(
      'states',
      'abbr',
      {
        type: Sequelize.STRING,
        allowNull: false,
      },
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(
      'states',
      'state',
      {
        type: Sequelize.STRING,
        allowNull: true,
      },
    );
    await queryInterface.changeColumn(
      'states',
      'abbr',
      {
        type: Sequelize.STRING,
        allowNull: true,
      },
    );
  },
};
