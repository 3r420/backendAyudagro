'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('detalleRespuesta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idAgricultor:{
        type:Sequelize.INTEGER
      },
      idPregunta:{
        type:Sequelize.INTEGER
      },
      idRespuesta:{
        type:Sequelize.INTEGER
      },
      fecha: {
        type: Sequelize.STRING
      },
      cantidadLikes: {
        type: Sequelize.FLOAT
      },
      cantidadNoLikes: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('detalleRespuesta');
  }
};