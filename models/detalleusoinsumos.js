'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detalleUsoInsumos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  detalleUsoInsumos.init({
    idCultivo:DataTypes.INTEGER,
    idInsumo: DataTypes.INTEGER,
    
  }, {
    sequelize,
    modelName: 'detalleUsoInsumos',
  });
  return detalleUsoInsumos;
};