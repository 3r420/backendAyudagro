'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Agricultores', [{
      nombre: 'Ivan',
      apellido: 'Cuasput',
      nickName:'1v4n',
      PassWorld:tt33,
      direccion:'Purece',
      Email:'yderazo31@misena.edu.co',
      posLng:'323-3434-23',
      posLat:'233-44442-23',
      puntosEstudio:3,
      puntosParticipacion:4.5,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Agricultores', null, {});
  }
};