'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Agricultor', [{
      idRol:1,
      nombre: 'Ivan',
      apellido: 'Cuasput',
      nickName:'1v4n',
      PassWorld:33,
      direccion:'Purece',
      Email:'yderazo31@misena.edu.co',
      ubicacion:'el Diviso Barbacoas',
      puntosEstudio:3,
      puntosParticipacion:4.5,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Agricultor', null, {});
  }
};