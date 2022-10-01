'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class insumos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  insumos.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    presentacion: DataTypes.STRING,
    precioRegular: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'insumos',
  });
  return insumos;
};