'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('respuesta', [{
      nombre: 'combatir plagas',
      contenido: 'las plagas se eliminan con insecticida',
      estado: '👍',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('respuesta', null, {});
  }
};