const Sequelize = require('sequelize');
const perfilacademico = require('../models').perfilAcademico;

module.exports={

List(_,res){
              return perfilacademico.findAll({})
              .then(perfilacademico => res.status(200).send(perfilacademico))
              .catch(error => res.status(400).send(error))
},
ListAt(req,res){
              return perfilacademico.findAll({
               
                            where: {
                                 id: req.params.id
                            }
              })
              .then(perfilacademico => res.status(200).send(perfilacademico))
              .catch(error => res.status(400).send(error))

},
CreatePerfilacademico(req, res){
     return perfilacademico.create({
          idEstudio:req.body.idEstudio,
          idAgricultor:req.body.idAgricultor,
          nombreCarrera: req.body.nombreCarrera,
          fechaGrado: req.body.fechaGrado,
          institucion: req.body.institucion
          
     }).then(perfilacademico => res.status(200).send(perfilacademico))
     .catch(error => res.status(400).send(error))
},

}
