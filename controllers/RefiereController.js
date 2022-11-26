const Sequelize = require('sequelize');
const refiere = require('../models').Refiere;

module.exports={

List(_,res){
              return refiere.findAll({})
              .then(refiere => res.status(200).send(refiere))
              .catch(error => res.status(400).send(error))
},
ListAt(req,res){
              return refiere.findAll({
                            where: {
                                 id: req.params.id
                            }
              })
              .then(refiere => res.status(200).send(refiere))
              .catch(error => res.status(400).send(error))

},
CreateRefiere(req, res){
     return refiere.create({
          idInsumo:req.body.idInsumo,
          idPregunta:req.body.idPregunta,
          idRespuesta:req.body.idRespuesta,
          idAgricultor:req.body.idAgricultor,
     }).then(refiere => res.status(200).send(refiere))
     .catch(error => res.status(400).send(error))
},

}
