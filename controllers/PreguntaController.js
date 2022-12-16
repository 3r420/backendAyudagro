const Sequelize = require('sequelize');
const categorias = require('../models').categorias;
const pregunta = require('../models').pregunta;
const registroMultimedia = require('../models').registroMultimedia;
const detalleRespuesta = require('../models').detalleRespuesta
const Refiere=require('../models').Refiere;
module.exports={

List(_,res){
              return pregunta.findAll({
               include:{
                    model:detalleRespuesta
               },
               require:true
               })
              .then(pregunta => res.status(200).send(pregunta))
              .catch(error => res.status(400).send(error))
},
ListAt(req,res){
              return pregunta.findAll({
                            
               
              })
              .then(pregunta => res.status(200).send(pregunta))
              .catch(error => res.status(400).send(Error))

},
CreatePregunta(req, res){
     return pregunta.create({
          fecha:new Date(),
          contenido: req.body.contenido,
          idCategoria:req.body.idCategoria,
          idAgricultor:req.body.idAgricultor
     }).then(pregunta => res.status(200).send(pregunta))
     .catch(error => res.status(400).send(error))
},

ListPreguntas_registrosMultimedia(req,res){
     return pregunta.findAll({
          include: {
               model: registroMultimedia,
               were:{
                    descripcion,
               }
             },
             require:'true',
     })
     .then(pregunta => res.status(200).send(pregunta))
     .catch(error => res.status(400).send(error))
},

}
