'use strict';
const {
  Model
} = require('sequelize');
//const Refiere=require('./refiere')//.refiere;
const detalleRespuesta=require('./detallerespuesta')//.detalleRespuesta;
module.exports = (sequelize, DataTypes) => {
  class Respuesta extends Model  {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Respuesta.hasMany(models.Refiere, {foreignKey:'idRespuesta'});
      this.hasMany(models.detalleRespuesta,{
        foreignKey:'idRespuesta'
      });
    }
  }
  Respuesta.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fecha: DataTypes.DATE,
    contenido: DataTypes.STRING,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Respuesta',
    tableName:'respuesta',
  });
  return Respuesta;
};