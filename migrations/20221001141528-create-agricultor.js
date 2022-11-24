'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Agricultor', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      nickName:{
        type:Sequelize.STRING
      },
      PassWorld:{
        type:Sequelize.INTEGER
      },
      Email:{
      type:Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      posLng: {
        type: Sequelize.STRING
      },
      posLat: {
        type: Sequelize.STRING
      },
      puntosEstudio: {
        type: Sequelize.FLOAT
      },
      puntosParticipacion: {
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
    await queryInterface.dropTable('Agricultor');
  }
};