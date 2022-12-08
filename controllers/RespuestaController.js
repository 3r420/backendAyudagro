const Sequelize = require('sequelize');
const Respuesta = require('../models').Respuesta;
const detalleRespuesta=require('../models').detalleRespuesta


module.exports={

List(_,res){
              return Respuesta.findAll({
               include: {
                    model: detalleRespuesta,
                  },
                  require:'true',
               })
          
              .then(Respuesta => res.status(200).send(Respuesta))
              .catch(error => res.status(400).send(error))
},
ListAt(req,res){
              return Respuesta.findAll({
                            where: {
                                 id: req.params.id
                            }
              })
              .then(Respuesta => res.status(200).send(Respuesta))
              .catch(error => res.status(400).send(error))

},
CreateRespuesta(req, res){
     return Respuesta.create({
          nombre: req.body.nombre,
          contenido: req.body.contenido,
          estado: req.body.estado
          
     }).then(Respuesta => res.status(200).send(Respuesta))
     .catch(error => res.status(400).send(error))
},



}
