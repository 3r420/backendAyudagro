'use strict';

const { DATEONLY } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('pregunta', [{
      fecha: new Date(),
      contenido: '¿que abono es bueno para la siembra de papa?',
      idCategoria:1,
      idAgricultor:1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('pregunta', null, {});
  }
};