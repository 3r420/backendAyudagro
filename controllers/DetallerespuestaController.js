const Sequelize = require('sequelize');
const detalleRespuesta = require('../models').detalleRespuesta;

module.exports={

List(_,res){
              return detalleRespuesta.findAll({})
              .then(detalleRespuesta => res.status(200).send(detalleRespuesta))
              .catch(error => res.status(400).send(error))
},
ListAt(req,res){
              return detalleRespuesta.findAll({
                            where: {
                                 id: req.params.id
                            }
              })
              .then(detalleRespuesta => res.status(200).send(detalleRespuesta))
              .catch(error => res.status(400).send(error))

},
CreateDetallerespuesta(req, res){
     return detalleRespuesta.create({
          fecha: req.body.fecha,
          cantidadLikes: req.body.cantidadLikes,
          cantidadNoLikes: req.body.cantidadNoLikes
     }).then(detalleRespuesta => res.status(200).send(detalleRespuesta))
     .catch(error => res.status(400).send(error))
},

}
