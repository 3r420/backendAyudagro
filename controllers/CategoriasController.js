const Sequelize = require('sequelize');
const categorias = require('../models').Categorias;

module.exports={

List(_,res){
              return categorias.findAll({})
              .then(categorias => res.status(200).send(categorias))
              .catch(error => res.status(400).send(error))
},
ListAt(req,res){
              return categorias.findAll({
                            where: {
                                 id: req.params.id
                            }
              })
              .then(categorias => res.status(200).send(categorias))
              .catch(error => res.status(400).send(error))

},
CreateCategorias(req, res){
     return categorias.create({
          nombre: req.body.nombre,
          descripcion: req.body.descripcion,
     }).then(categorias => res.status(200).send(categorias))
     .catch(error => res.status(400).send(error))
},

}