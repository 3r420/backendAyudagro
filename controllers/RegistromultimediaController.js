const Sequelize = require('sequelize');
const registroMultimedia = require('../models').registroMultimedia;

module.exports={

List(_,res){
              return registroMultimedia.findAll({})
              .then(registroMultimedia => res.status(200).send(registroMultimedia))
              .catch(error => res.status(400).send(error))
},
ListAt(req,res){
              return registroMultimedia.findAll({
                            where: {
                                 id: req.params.id
                            }
              })
              .then(registroMultimedia => res.status(200).send(registroMultimedia))
              .catch(error => res.status(400).send(error))

},
CreateRegistromultimedia(req, res){
     return registroMultimedia.create({
          titulo: req.body.titulo,
          descripcion: req.body.descripcion,
          URL: req.body.URL,
          idPregunta: req.body.idPregunta
     }).then(registroMultimedia => res.status(200).send(registroMultimedia))
     .catch(error => res.status(400).send(error))
},

}
