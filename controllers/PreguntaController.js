const Sequelize = require('sequelize');
const pregunta = require('../models').pregunta;
const registroMultimedia = require('../models').registroMultimedia;

module.exports={

List(_,res){
              return pregunta.findAll({})
              .then(pregunta => res.status(200).send(pregunta))
              .catch(error => res.status(400).send(error))
},
ListAt(req,res){
              return pregunta.findAll({
                            where: {
                                 id: req.params.id
                            }
              })
              .then(pregunta => res.status(200).send(pregunta))
              .catch(error => res.status(400).send(error))

},
CreatePregunta(req, res){
     return pregunta.create({
          nombre: req.body.nombre,
          contenido: req.body.contenido
     }).then(pregunta => res.status(200).send(pregunta))
     .catch(error => res.status(400).send(error))
},

ListPreguntas_registrosMultimedia(req,res){
     return pregunta.findAll({
          include: {
               model: registroMultimedia
             },
             require:'true',
     })
     .then(pregunta => res.status(200).send(pregunta))
     .catch(error => res.status(400).send(error))
},

}
