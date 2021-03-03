module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Styles', [{
      name: 'IPA',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'IIPA',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'IIIPA',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Imperial IPA',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Lager',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Stout',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Sour',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Pilsner',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Belgian',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Styles', null, { truncate: true, restartIdentity: true });
  },
};
