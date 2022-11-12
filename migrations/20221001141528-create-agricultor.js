'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Agricultores', {
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
        type:sequelize.STRING
      },
      PassWorld:{
        type:sequelize.INTEGER
      },
      Email:{
      type:sequelize.STRING
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
    await queryInterface.dropTable('Agricultores');
  }
};