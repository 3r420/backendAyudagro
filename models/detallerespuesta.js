'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detalleRespuesta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  detalleRespuesta.init({
    idAgricultor:DataTypes.INTEGER,
    idPregunta:DataTypes.INTEGER,
    idRespuesta:DataTypes.INTEGER,
    fecha: DataTypes.STRING,
    cantidadLikes: DataTypes.FLOAT,
    cantidadNoLikes: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'detalleRespuesta',
  });
  return detalleRespuesta;
};