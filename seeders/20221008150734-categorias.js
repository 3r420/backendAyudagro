'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categorias', [{
      nombre: 'siembra',
      descripcion: 'como puedo sembrar la papa amarilla?',
      idCategoriaSuperior:1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categorias', null, {});
  }
};