module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Brewers', [{
      name: 'Moksa',
      cityId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Moonraker',
      cityId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Alvarado Street',
      cityId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Brewers', null, { truncate: true, restartIdentity: true });
  },
};
