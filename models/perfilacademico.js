'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class perfilAcademico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  perfilAcademico.init({
    idEstudio:DataTypes.INTEGER,
    idAgricultor:DataTypes.INTEGER,
    nombreCarrera: DataTypes.STRING,
    fehaGrado: DataTypes.STRING,
    institucion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'perfilAcademico',
  });
  return perfilAcademico;
};