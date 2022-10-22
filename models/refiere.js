'use strict';
const {
  Model
} = require('sequelize');
const detallerespuesta = require('./detallerespuesta');
module.exports = (sequelize, DataTypes) => {
  class refiere extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.belongsTo(detallerespuesta,{})
    }
  }
  refiere.init({
    idInsumo: DataTypes.INTEGER,
    idPregunta:DataTypes.INTEGER,
    idRespuesta:DataTypes.INTEGER,
    idAgricultor:DataTypes.INTEGER,


  }, {
    sequelize,
    modelName: 'refiere',
  });
  return refiere;
};