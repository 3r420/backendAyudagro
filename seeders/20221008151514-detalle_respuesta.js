'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('detalleRespuesta', [{
      idAgricultor:1,
      idPregunta:1,
      idRespuesta:1,
      fecha:'23/09/2022',
      cantidadLikes:'4',
      cantidadNoLikes:'1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('detalleRespuesta', null, {});
  }
};
