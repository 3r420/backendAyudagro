const Sequelize = require('sequelize');
const respuesta = require('../models').Respuesta;

module.exports={

List(_,res){
              return respuesta.findAll({})
              .then(respuesta => res.status(200).send(respuesta))
              .catch(error => res.status(400).send(error))
},
ListAt(req,res){
              return respuesta.findAll({
                            where: {
                                 id: req.params.id
                            }
              })
              .then(respuesta => res.status(200).send(respuesta))
              .catch(error => res.status(400).send(error))

},
CreateRespuesta(req, res){
     return respuesta.create({
          nombre: req.body.nombre,
          contenido: req.body.contenido,
          estado: req.body.estado
          
     }).then(respuesta => res.status(200).send(respuesta))
     .catch(error => res.status(400).send(error))
},

}
