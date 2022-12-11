'use strict';
const {
  Model
} = require('sequelize');
const refiere=require('./refiere')//.refiere;
const Agricultor=require("./agricultor")//.Agricultor;
const categorias=require('./categorias')//.categoria;
const registroMultimedia=require('./registromultimedia')//.registroMultimedia;
const detalleRespuesta=require('./detallerespuesta')//.detalleRespuesta;
module.exports = (sequelize, DataTypes) => {
  class pregunta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.detalleRespuesta,{
        foreignKey:'idPregunta'
      });
       this.belongsTo(models.Agricultor,{
        foreignKey:'idAgricultor'});
        
        this.hasMany(models.Refiere,{
          foreignKey:'idPregunta'});
          
          this.hasMany(models.registroMultimedia,{
            foreignKey:'idPregunta'});

        this.belongsTo(models.categorias,{
          foreignKey:'idCategoria' });
    }
  }
  pregunta.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fecha: DataTypes.DATE,
    contenido: DataTypes.STRING,
    idCategoria:{
        type:DataTypes.INTEGER,
      references:{model:"categorias",key:'id'}},
    idAgricultor:{
      type:DataTypes.INTEGER,
    references:{model:"Agricultor",key:"id"}},
  }, {
    sequelize,
    modelName: 'pregunta',
    tableName:'pregunta',
  });
  return pregunta;
};