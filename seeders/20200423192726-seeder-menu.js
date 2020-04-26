'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Menus', 
    [
      {
        name: 'Bakmi PEMDA Bogor',
        price: '12500',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ayam Goreng',
        price: '20000',
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
    return queryInterface.bulkDelete('Menus', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
