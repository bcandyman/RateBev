const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Logins', [{
      // uuid: uuidv4(),
      uuid: '725f30bc-7fa7-4f9d-ab5f-3a57bec9d296',
      name: 'Benjamin',
      username: 'user1',
      password: 'pass1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      // uuid: uuidv4(),
      uuid: '9b49a8a9-765e-4f88-86a6-8edce1313c10',
      name: 'Vincent',
      username: 'user2',
      password: 'pass2',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Logins', null, { truncate: true, restartIdentity: true });
  },
};
