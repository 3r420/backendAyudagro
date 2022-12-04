'use strict';
const {
  Model
} = require('sequelize');
const Refiere=require('./refiere')//.refiere;
const perfilAcademico=require("./perfilacademico");
const pregunta=require("./pregunta");
const detalleRespuesta=require("./detallerespuesta");
const detalleCultivo=require("./detallecultivo");
const rol=require("./rol");
module.exports = (sequelize, DataTypes) => {
  class Agricultor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.detalleCultivo,{foreignKey:'id_Agricultor'});
      this.hasMany(models.detalleRespuesta,{foreignKey:'idAgricultor'});
      this.hasMany(models.perfilAcademicos,{foreignKey:'idAgricultor'});
      this.hasMany(models.Refiere,{foreignKey:'idAgricultor'});
      this.hasMany(models.pregunta,{foreignKey:'idAgricultor'});
      this.belongsTo(models.rol,{
        foreignKey:'idRol'
      });
    }
  }
  Agricultor.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idRol: {
      type:DataTypes.INTEGER,
      references: {
        model: 'rol', key:'id'
      }
    },
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    nickName:DataTypes.STRING,
    PassWorld:DataTypes.INTEGER,
    Email:DataTypes.STRING,
    direccion: DataTypes.STRING,
    ubicacion: DataTypes.STRING,
    puntosEstudio: DataTypes.FLOAT,
    puntosParticipacion: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Agricultor',
    tableName:'Agricultor'
  });
  return Agricultor;
};