const Sequelize = require('sequelize');
const detalleusoinsumos = require('../models').Detalleusoinsumos;

module.exports={

List(_,res){
              return detalleusoinsumos.findAll({})
              .then(detalleusoinsumos => res.status(200).send(detalleusoinsumos))
              .catch(error => res.status(400).send(error))
},
ListAt(req,res){
              return detalleusoinsumos.findAll({
                            where: {
                                 id: req.params.id
                            }
              })
              .then(detalleusoinsumos => res.status(200).send(detalleusoinsumos))
              .catch(error => res.status(400).send(error))

},
CreateDetalleusoinsumos(req, res){
     return detalleusoinsumos.create({
          nombre: req.body.nombre,
          descripcion: req.body.descripcion
     }).then(detalleusoinsumos => res.status(200).send(detalleusoinsumos))
     .catch(error => res.status(400).send(error))
},

}
