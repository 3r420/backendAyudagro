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
          nombre: req.body.nombre,
          descripcion: req.body.descripcion
     }).then(refiere => res.status(200).send(refiere))
     .catch(error => res.status(400).send(error))
},

}
