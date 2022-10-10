'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('perfilAcademicos', [{
    
      idAgricultor:1,
      nombreCarrera:'agronomo',
      fechaGrado:'12/12/2012',
      institucion:'SENA',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('perfilAcademicos', null, {});
  }
};
