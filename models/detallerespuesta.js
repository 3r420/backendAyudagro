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
      /*this.belongsTo(models.Agricultor,{
        foreignKey:'id',targetKey:'idAgricultor'
      });
      this.belongsTo(models.respuesta,{
        foreignKey:'id',targetKey:'idRespuesta'
      });
      this.belongsTo(models.pregunta,{
        foreignKey:'id', targetKey:'idPregunta'
      });*/
      
    }
  }
  detalleRespuesta.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idAgricultor:DataTypes.INTEGER,
    idPregunta:DataTypes.INTEGER,
    idRespuesta:DataTypes.INTEGER,
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