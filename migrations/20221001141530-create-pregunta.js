'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pregunta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      contenido: {
        type: Sequelize.STRING
      },
      idCategoria:{
        type:Sequelize.INTEGER,
        references:{
          model:{tableName:'categorias'},
          key:'id'
        },
      },
      idAgricultor:{
        type:Sequelize.INTEGER,
        references:{
          model:{tableName:'agricultores'},
          key:'id'
        }
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
    await queryInterface.dropTable('pregunta');
  }
};