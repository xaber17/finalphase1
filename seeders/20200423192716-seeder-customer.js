'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Customers', 
    [
      {
        firstname: 'John',
        lastname: 'Doe',
        phone: '0800112233',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: 'Atta',
        lastname: 'Halilintar',
        phone: '0888811170',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Customers', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
