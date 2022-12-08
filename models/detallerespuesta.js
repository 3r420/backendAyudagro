'use strict';
const {
  Model
} = require('sequelize');
const Agricultor=require("./agricultor")//.Agricultor;
const respuesta=require('./respuesta')//.respuesta;
const pregunta=require('./pregunta')//.pregunta;
module.exports = (sequelize, DataTypes) => {
  class detalleRespuesta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Agricultor,{
        foreignKey:'idAgricultor'
      });
     this.belongsTo(models.Respuesta,{
       foreignKey:'idRespuesta'
      });
      //this.belongsTo(models.pregunta,{
       // foreignKey:'id', targetKey:'idPregunta'
      //});*/
      
    }
  }
  detalleRespuesta.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idAgricultor:{
       type:DataTypes.INTEGER,
       references:{
        model:'Agricultor',key:'id'
       } },
    idPregunta:{
      type:DataTypes.INTEGER,
    reference:{
      model:'pregunta',key:'id'
    }},
    idRespuesta:{
      type:DataTypes.INTEGER,
      references:'respuesta',key:'id'
    },
    fecha: DataTypes.STRING,
    cantidadLikes: DataTypes.FLOAT,
    cantidadNoLikes: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'detalleRespuesta',
    tableName: 'detalleRespuesta',
  });
  return detalleRespuesta;
};