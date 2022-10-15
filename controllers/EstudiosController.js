const Sequelize = require('sequelize');
const estudios = require('../models').Estudios;

module.exports={

List(_,res){
              return estudios.findAll({})
              .then(estudios => res.status(200).send(estudios))
              .catch(error => res.status(400).send(error))
},
ListAt(req,res){
              return estudios.findAll({
                            where: {
                                 id: req.params.id
                            }
              })
              .then(estudios => res.status(200).send(estudios))
              .catch(error => res.status(400).send(error))

},
CreateEstudios(req, res){
     return estudios.create({
          nombre: req.body.nombre,
          descripcion: req.body.descripcion
          
     }).then(estudios => res.status(200).send(estudios))
     .catch(error => res.status(400).send(error))
},

}
