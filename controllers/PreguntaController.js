const Sequelize = require('sequelize');
const categorias = require('../models').categorias;
const pregunta = require('../models').pregunta;
const registroMultimedia = require('../models').registroMultimedia;
const detalleRespuesta = require('../models').detalleRespuesta
const Refiere=require('../models').Refiere;
module.exports={

List(_,res){
              return pregunta.findAll({ 
             
             require:'true',})
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
          contenido: req.body.contenido,
          idCategoria:req.body.idCategoria,
          idAgricultor:req.body.idAgricultor
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
