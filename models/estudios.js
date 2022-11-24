'use strict';
const {
  Model
} = require('sequelize');
const perfilAcademicos=require("./perfilacademico");
module.exports = (sequelize, DataTypes) => {
  class Estudios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    // this.hasMany(models.perfilAcademicos,{foreignKey:'idEstudio'});
    }
  }
  Estudios.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'Estudios',
    modelName: 'Estudio',
  });
  return Estudios;
};