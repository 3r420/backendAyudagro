'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('detalleCultivos', {
      
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_Cultivo:{
        allowNull: false,
        type:Sequelize.INTEGER,
        references:{
          model:{ tableName:'cultivo'},
          key:'id'
        },
       
      },
      id_Agricultor:{
        allowNull: false,
        primaryKey: true,
        type:Sequelize.INTEGER,
        references:{
          model:{ tableName:'Agricultor'},
          key:'id'
        },
        allowNull: false,
        primaryKey: true
      },
      fechaInicio: {
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
    await queryInterface.dropTable('detalleCultivos');
  }
};