'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('detalleCultivos', [{
      id_Cultivo:1,
      id_Agricultor:1,
      fechaInicio:'24/09/2022',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('detalleCultivos', null, {});
  }
};