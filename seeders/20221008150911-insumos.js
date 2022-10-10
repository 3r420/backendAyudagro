'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('insumos', [{
   
      nombre:'abafeb',
      descripcion:'insecticida para combatir plagas como la araña de la fresa',
      presentacion:'en litros o galones',
      precioRegular:39000,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('insumos', null, {});
  }
};