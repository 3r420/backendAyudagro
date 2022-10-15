'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class registroMultimedia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.pregunta, {as: 'pregunta'});

    }
  }
  registroMultimedia.init({
    titulo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    URL: DataTypes.STRING, 
    idPregunta:DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'registroMultimedia',
  });
  return registroMultimedia;
};