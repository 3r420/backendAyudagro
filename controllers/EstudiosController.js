const Sequelize = require('sequelize');
const estudios = require('../models').Estudios;
const perfilAcademicos =require('../models').perfilAcademicos

module.exports={

List(_,res){
              return estudios.findAll({
               include: {
                    model: perfilAcademicos,
                  },
                  require:'true'
              })
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
