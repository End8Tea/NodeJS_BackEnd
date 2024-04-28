'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Users', 
    [
      {
        Email: 'John Doe',
        Name: 'John',
        City: 'Fake1',
      },
      {
        Email: 'John Doe2',
        Name: 'John2',
        City: 'Fake2',
      },
      {
        Email: 'John Doe3',
        Name: 'John3',
        City: 'Fake3',
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
