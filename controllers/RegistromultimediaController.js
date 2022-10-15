const Sequelize = require('sequelize');
const registromultimedia = require('../models').Registromultimedia;

module.exports={

List(_,res){
              return registromultimedia.findAll({})
              .then(registromultimedia => res.status(200).send(registromultimedia))
              .catch(error => res.status(400).send(error))
},
ListAt(req,res){
              return registromultimedia.findAll({
                            where: {
                                 id: req.params.id
                            }
              })
              .then(registromultimedia => res.status(200).send(registromultimedia))
              .catch(error => res.status(400).send(error))

},
CreateRegistromultimedia(req, res){
     return registromultimedia.create({
          titulo: req.body.titulo,
          descripcion: req.body.descripcion,
          URL: req.body.URL,
          idPregunta: req.body.idPregunta
     }).then(registromultimedia => res.status(200).send(registromultimedia))
     .catch(error => res.status(400).send(error))
},

}
