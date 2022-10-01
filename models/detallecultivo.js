'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detalleCultivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  detalleCultivo.init({
    fechaInicio: DataTypes.STRING,
    lugarCultivo: DataTypes.STRING,
    id_Cultivo:{
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_Agricultor:{
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
  }, {
    sequelize,
    modelName: 'detalleCultivos',
  });
  return detalleCultivo;
};