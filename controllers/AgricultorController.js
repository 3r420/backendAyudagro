const { QueryError } = require('sequelize');
const Sequelize = require('sequelize');
const pregunta = require('../models').pregunta;
const rol = require('../models').rol;
const agricultor = require('../models').Agricultor;

module.exports={
     ListPreguntas_Agricultor(req,res){
          return agricultor.findAll({
               include: {
                    model: pregunta,
                  },
                  require:'true',
          })
          .then(pregunta => res.status(200).send(pregunta))
          .catch(error => res.status(400).send(error.toString()))
     },

List(_,res){
              return agricultor.findAll({})
              .then(agricultor => res.status(200).send(agricultor))
              .catch(error => res.status(400).send(error));
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
          nickName:req.body.nickName,
          passWorld: req.body.passWorld,
          Email: req.body.Email,
          direccion: req.body.direccion,
          ubicacion: req.body.ubicacion,
          puntosEstudio: req.body.puntosEstudio,
          puntosParticipacion: req.body.puntosParticipacion
     })
      
     .then(agricultor => res.status(200).send(agricultor))
     .catch(error => res.status(400).send(error))
},

}