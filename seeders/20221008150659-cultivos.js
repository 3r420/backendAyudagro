'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cultivos', [{
      nombre: 'fresas',
      descripcion: 'cultivo de fresas de 6 meses de sembrada abonada con rootfeet',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cultivos', null, {});
  }
};