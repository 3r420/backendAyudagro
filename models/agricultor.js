'use strict';
const {
  Model, INET, INTEGER, STRING
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agricultor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Agricultor.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    nickName:DataTypes.STRING,
    PassWorld:DataTypes.INTEGER,
    Email:DataTypes.STRING,
    direccion: DataTypes.STRING,
    posLng: DataTypes.STRING,
    posLat: DataTypes.STRING,
    puntosEstudio: DataTypes.FLOAT,
    puntosParticipacion: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Agricultor',
    tableName:'Agricultores'
  });
  return Agricultor;
};