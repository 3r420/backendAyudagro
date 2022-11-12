'use strict';
const {
  Model
} = require('sequelize');
const Agricultores= require("../models").Agricultores;
const cultivos=require("../models").cultivos;
module.exports = (sequelize, DataTypes) => {
  class detalleCultivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Agricultores,{
        foreignKey:'id_Agricultor'
      });
      this.belongsTo(models.cultivos,{
        foreignKey:'id_cultivo'
      })
      
    }
  }
  detalleCultivo.init({
    id_Cultivo:{
      type:DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    id_Agricultor:{
      type:DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    fechaInicio: DataTypes.STRING,
    lugarCultivo: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'detalleCultivo',
    tableName: 'detalleCultivos',
  });
  return detalleCultivo;
};