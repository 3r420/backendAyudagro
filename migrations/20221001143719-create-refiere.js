'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('refieres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idInsumo: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references:{
          model:{tableName:'insumos'},
          key:'id'
        }
      },
      idPregunta: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references:{
          model:{tableName:'pregunta'},
          key:'id'
        }
      },
      idRespuesta: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references:{
          model:{tableName:'respuesta'},
          key:'id'
        }
      },
      idAgricultor: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references:{
          model:{tableName:'Agricultor'},
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
    await queryInterface.dropTable('refieres');
  }
};