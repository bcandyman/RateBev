module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Brews', [{
      name: 'One Giant Leap',
      brewerId: 3,
      styleId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'ISO Nelson',
      brewerId: 1,
      styleId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Brews', null, { truncate: true, restartIdentity: true });
  },
};
