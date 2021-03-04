module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Ratings', [{
      userId: '725f30bc-7fa7-4f9d-ab5f-3a57bec9d296',
      brewId: 2,
      rating: 4,
      comment: 'Comment 1 User1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: '725f30bc-7fa7-4f9d-ab5f-3a57bec9d296',
      brewId: 1,
      rating: 2,
      comment: 'Comment 2 User1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: '9b49a8a9-765e-4f88-86a6-8edce1313c10',
      brewId: 1,
      rating: 5,
      comment: 'Comment 1 User2',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Ratings', null, { truncate: true, restartIdentity: true });
  },
};
