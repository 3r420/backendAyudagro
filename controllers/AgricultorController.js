const Sequelize = require('sequelize');
const agricultor = require('../models').Agricultor;

module.exports={

List(_,res){
              return agricultor.findAll({})
              .then(agricultor => res.status(200).send(agricultor))
              .catch(error => res.status(400).send(error))
},
ListAt(req,res){
              return agricultor.findAll({
                            where: {
                                 id: req.params.id
                            }
              })
              .then(agricultor => res.status(200).send(agricultor))
              .catch(error => res.status(400).send(error))

},
CreateAgricultor(req, res){
     return agricultor.create({
          nombre: req.body.nombre,
          apellido: req.body.apellido,
          direccion: req.body.direccion,
          posLng: req.body.posLng,
          posLat: req.body.posLat,
          puntosEstudio: req.body.puntosEstudio,
          puntosParticipacion: req.body.puntosParticipacion
     }).then(agricultor => res.status(200).send(agricultor))
     .catch(error => res.status(400).send(error))
},

}