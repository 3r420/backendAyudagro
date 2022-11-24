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
        allowNull: false,
        type:Sequelize.INTEGER,
        references:{
          model:{tableName:'Agricultor'},
          key:'id'
        }
      },
      idPregunta:{
        allowNull:false,
        type:Sequelize.INTEGER,
        references:{
          model:{tableName:'pregunta'},
          key:'id'
        }
      },
      idRespuesta:{
        allowNull:false,
        prymaryKey:true,
        type:Sequelize.INTEGER,
        references:{
          model:{tableName:'respuesta'},
          key:'id'
        }
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