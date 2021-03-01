module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Cities', [{
      name: 'Tulsa',
      stateId: 36,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Rocklin',
      stateId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Auburn',
      stateId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Santa Rosa',
      stateId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Cities', null, { truncate: true, restartIdentity: true });
  },
};
