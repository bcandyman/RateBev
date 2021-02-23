'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('cities', [{
      name: 'Tulsa',
      stateId: '4',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('states', null, {});
  },
};
