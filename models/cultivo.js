'use strict';
const {
  Model
} = require('sequelize');
const detalleCultivo=require("../models").detalleCultivo;
module.exports = (sequelize, DataTypes) => {
  class cultivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.detalleCultivo,{foreignKey:'id_cultivo'});
    }
  }
  cultivo.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'cultivo',
  });
  return cultivo;
};