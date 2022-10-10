'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('registroMultimedia', [{
      titulo: 'FOTO',
      descripcion: '¿foto de mi cultivo de papa?',
      URL:'WWW.IMEGE.COM',
      idPregunta:1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('registroMultimedia', null, {});
  }
};
