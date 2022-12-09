'use strict';
const {
  Model
} = require('sequelize');
const Refiere=require('./refiere')//.refiere;
const detalleUsoInsumos=require('./detalleusoinsumos')//.detalleUsoInsumos;
module.exports = (sequelize, DataTypes) => {
  class insumos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Refiere,{
        foreignKey:'idInsumo'
      });
      this.hasMany(models.detalleUsoInsumos,{
        foreignKey:'idInsumo'
      });

    }
  }
  insumos.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    presentacion: DataTypes.STRING,
    precioRegular: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'insumos',
    tableName: 'insumos',
  });
  return insumos;
};