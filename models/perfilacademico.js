'use strict';
const {
  Model
} = require('sequelize');
const Estudios=require("./estudios")//.Estudios;
const Agricultor=require("./agricultor")//.Agricultor;
module.exports = (sequelize, DataTypes) => {
  class perfilAcademicos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    /*  this.belongsTo(models.Estudios,
        {foreignKey:'id',targetKey:'idEstudio'});
      this.belongsTo(models.Agricultor,
        {foreignKey:'id',targetKey:'idAgricultor'});*/
    }
  }
  perfilAcademicos.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idEstudio:{
      type:DataTypes.INTEGER,
      references:{model:'Estudios',key:"id"}
    },
    idAgricultor:{
      type:DataTypes.INTEGER,
      references:{model:'Agricultor',key:"id"}},
    nombreCarrera: DataTypes.STRING,
    fechaGrado: DataTypes.STRING,
    institucion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'perfilAcademico',
    tableName: 'perfilAcademicos',
  });
  return perfilAcademicos;
};