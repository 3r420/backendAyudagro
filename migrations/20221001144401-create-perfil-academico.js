'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('perfilAcademicos', {
      id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:Sequelize.INTEGER,
      },

      idEstudio: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:{tableName:'Estudios'},
          key:'id'
        }
      },
      
      idAgricultor:{
        allowNull:false,
        type:Sequelize.INTEGER,
        references:{
          model:{tableName:'Agricultores'},
          key:'id'
        }
      },
      nombreCarrera: {
        type: Sequelize.STRING
      },
      fechaGrado: {
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