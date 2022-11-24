'use strict';
const {
  Model
} = require('sequelize');
const pregunta=require("./pregunta");
module.exports = (sequelize, DataTypes) => {
  class categorias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /*this.hasMany(models.pregunta,{
        foreignKey:'idCategoria'
      });*/
      /*this.belongsTo(models.categoria,{
        foreignKey:'id',targetkey:'idCategoriaSuperior'
      });
      this.hasMany(models.categoria,{
        foreignKey:'idCategoriaSuperior'
      })*/
      this.hasMany(models.pregunta,{
        foreignKey:'idCategoria'
      });
    }
  }
  categorias.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    idCategoriaSuperior:{
      type:DataTypes.INTEGER,
      allowNull:false,
      prymaryKey:true
    },
  }, {
    sequelize,
    modelName: 'categorias',
    tableName: 'categorias',
  });
  return categorias;
};