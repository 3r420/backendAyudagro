'use strict';
const { Model } = 
require('sequelize');
//const Respuesta = require('./respuesta');//.respuesta;
const insumos=require('./insumos');//.insumos;
const pregunta=require('./pregunta');//.pregunta;
const Agricultor=require('./agricultor');//.Agricultor;
const { Sequelize } = require('Sequelize');
module.exports = (sequelize, DataTypes) => {
  class Refiere extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      // define association here
     /* this.belongsTo(insumos,{
        foreignKey:'idInsumos'//,targetKey:''
      });
      refiere.belongsTo(models.models.respuesta,{
        foreignKey:'idRespuesta'//,targetKey:''
      });
      refiere.belongsTo(models.pregunta,{
        foreignKey:'idPregunta'//, targetKey:''
      });
      refiere.belongsTo(models.Agricultor,{
        foreignKey:'idAgricultor'//,targetKey:''
      });*/

      //Refiere.belongsTo(models.Respuesta, {foreignKey: 'idRespuesta'});
    }
  }
  Refiere.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idInsumo: {
      type : DataTypes.INTEGER,
      references: {model:"insumos",key:"id"},
    },
    idPregunta:{
      type : DataTypes.INTEGER,
      references: {model:"pregunta",key:"id"},
    },
    idRespuesta:{
      type : DataTypes.INTEGER,
      references: { model:"respuesta",key:"id"},
    },
    idAgricultor:{
      type : DataTypes.INTEGER,
      references: {model:"Agricultor",key:"id"},
    },


  }, {
    sequelize,
    modelName: 'Refiere',
    tableName:'refieres',
  });
  return Refiere;
};