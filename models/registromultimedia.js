'use strict';
const {
  Model
} = require('sequelize');
const pregunta=require('./pregunta')//.pregunta;
module.exports = (sequelize, DataTypes) => {
  class registroMultimedia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.pregunta,{foreignKey:'idPregunta'});

    }
  }
  registroMultimedia.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    titulo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    URL: DataTypes.STRING, 
    idPregunta:{
      type : DataTypes.INTEGER,
      references: { model:"pregunta",key:"id"},
    },

  }, {
    sequelize,
    modelName: 'registroMultimedia',
    tableName:'registroMultimedia',
    
  });
  return registroMultimedia;
};