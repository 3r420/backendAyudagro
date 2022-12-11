'use strict';

const { sequelize } = require('../models');

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
      idRol:{
        allowNull: false,
        type:Sequelize.INTEGER,
        references:{
          model:{tableName:'rol'},
          key:'id'
        },
      },
      nombre: {
        allowNull: false,
        type: Sequelize.STRING
      },
      apellido: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nickName:{
        type:Sequelize.STRING
      },
      PassWorld:{
        allowNull: false,
        type:Sequelize.STRING
      },
      Email:{
        allowNull: false,
      type:Sequelize.STRING
      },
      direccion: {
        allowNull: false,
        type: Sequelize.STRING
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