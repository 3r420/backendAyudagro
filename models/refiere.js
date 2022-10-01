'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class refiere extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  refiere.init({
    idInsumo: DataTypes.FLOAT,
    idPregunta:DataTypes.FLOAT,
    idRespuesta:DataTypes.FLOAT,
    idAgricultor:DataTypes.FLOAT


  }, {
    sequelize,
    modelName: 'refiere',
  });
  return refiere;
};