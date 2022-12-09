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


    
      this.belongsTo(models.insumos,{
        foreignKey:'idInsumo'
      });

      this.belongsTo(models.cultivo,{
        foreignKey:'idCultivo'
      }); 
    }
  }
  detalleUsoInsumos.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idCultivo:{
      type:DataTypes.INTEGER,
      references:{model:"cultivo",key:'id'},
    },
    idInsumo:{
      type:DataTypes.INTEGER,
      references:{model:'insumos',key:'id'}
    },
    
    
  }, {
    sequelize,
    modelName: 'detalleUsoInsumos',
    tableName:'detalleUsoInsumos',
  });
  return detalleUsoInsumos;
};