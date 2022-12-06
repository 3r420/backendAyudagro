'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Agricultor', [{
      idRol:1,
      nombre: 'Ivan',
      apellido: 'Cuasput',
      nickName:'1v4n',
      PassWorld:'3BB3',
      Email:'yderazo31@misena.edu.co',
      direccion:'Purece',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Agricultor', null, {});
  }
};