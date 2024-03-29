const Sequelize = require('sequelize');
const insumos = require('../models').insumos;
const detalleUsoInsumos =require('../models').detalleUsoInsumos
const Refiere=require('../models').Refiere;
module.exports={

List(_,res){
              return insumos.findAll({
               include: {
                    model: detalleUsoInsumos,
                  },
                  require:'true',})
              
              .then(insumos => res.status(200).send(insumos))
              .catch(error => res.status(400).send(error))
},
ListAt(req,res){
              return insumos.findAll({
                            where: {
                                 id: req.params.id
                            }
              })
              .then(insumos => res.status(200).send(insumos))
              .catch(error => res.status(400).send(error))

},
CreateInsumos(req, res){
     return insumos.create({
          nombre: req.body.nombre,
          descripcion: req.body.descripcion,
          presentacion: req.body.presentacion,
          precioRegular: req.body.precioRegular
     }).then(insumos => res.status(200).send(insumos))
     .catch(error => res.status(400).send(error))
},

}