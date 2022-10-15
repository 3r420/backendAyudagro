const Sequelize = require('sequelize');
const detallerespuesta = require('../models').Detallerespuesta;

module.exports={

List(_,res){
              return detallerespuesta.findAll({})
              .then(detallerespuesta => res.status(200).send(detallerespuesta))
              .catch(error => res.status(400).send(error))
},
ListAt(req,res){
              return detallerespuesta.findAll({
                            where: {
                                 id: req.params.id
                            }
              })
              .then(detallerespuesta => res.status(200).send(detallerespuesta))
              .catch(error => res.status(400).send(error))

},
CreateDetallerespuesta(req, res){
     return detallerespuesta.create({
          fecha: req.body.fecha,
          cantidadLikes: req.body.cantidadLikes,
          cantidadNoLikes: req.body.cantidadNoLikes
     }).then(detallerespuesta => res.status(200).send(detallerespuesta))
     .catch(error => res.status(400).send(error))
},

}
