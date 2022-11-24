'use strict';
const {
  Model
} = require('sequelize');
const cultivo=require('./cultivo')//.cultivo;
const insumos=require('./insumos')//.insumos;
module.exports = (sequelize, DataTypes) => {
  class detalleUsoInsumos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here


    /*
      this.belongsTo(models.insumos,{
        foreignKey:'id',targetKey:'idInsumo'
      });

      this.belongsTo(models.cultivo,{
        foreignKey:'id',targetKey:'idCultivo'
      }); */
    }
  }
  detalleUsoInsumos.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idCultivo:DataTypes.INTEGER,
  
    
    idInsumo: DataTypes.INTEGER,
    
    
  }, {
    sequelize,
    modelName: 'detalleUsoInsumos',
    tableName:'detalleUsoInsumos',
  });
  return detalleUsoInsumos;
};