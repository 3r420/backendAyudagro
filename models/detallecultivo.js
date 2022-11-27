'use strict';
const {
  Model
} = require('sequelize');
const Agricultor= require("./agricultor")//.Agricultor;
const cultivo=require("./cultivo")//.cultivo;
module.exports = (sequelize, DataTypes) => {
  class detalleCultivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     /* this.belongsTo(models.Agricultor,{
        foreignKey:'id',targetKey:'id_Agricultor'
      });
      this.belongsTo(models.cultivo,{
        foreignKey:'id',targetKey:'id_Cultivo'
      });*/
      
    }
  }
  detalleCultivo.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_Cultivo:{
      type:DataTypes.INTEGER,
      references:{model:"cultivo",key:"id"},
     
    },
    id_Agricultor:{
      type:DataTypes.INTEGER,
      references:{model:"Agricultor",key:"id"},    
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