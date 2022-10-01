'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('perfilAcademicos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idEstudio:{
        type:Sequelize.INTEGER
      },
      idAgricultor:{
        type:Sequelize.INTEGER
      },
      nombreCarrera: {
        type: Sequelize.STRING
      },
      fehaGrado: {
        type: Sequelize.STRING
      },
      institucion: {
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
    await queryInterface.dropTable('perfilAcademicos');
  }
};