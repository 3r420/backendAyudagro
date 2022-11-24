'use strict';
const {
  Model
} = require('sequelize');
const detalleCultivo=require("./registromultimedia");
const detalleUsoInsumos=require("./detalleusoinsumos");
module.exports = (sequelize, DataTypes) => {
  class cultivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /*this.hasMany(models.detalleCultivo,{
        foreignKey:'id_cultivo'});
      this.hasMany(models.detalleUsoInsumos,{
        foreignKey:'idCultivo'
      });*/
    }
  }
  cultivo.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'cultivo',
    tableName:'cultivos',
  });
  return cultivo;
};