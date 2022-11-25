const Sequelize = require('sequelize');
const detallecultivo = require('../models/detallecultivo')

module.exports={

List(_,res){
              return detallecultivo.findAll({})
              .then(detallecultivo => res.status(200).send(detallecultivo))
              .catch(error => res.status(400).send(error))
},
ListAt(req,res){
              return detallecultivo.findAll({
                            where: {
                                 id: req.params.id
                            }
              })
              .then(detallecultivo => res.status(200).send(detallecultivo))
              .catch(error => res.status(400).send(error))

},
CreateDetallecultivo(req, res){
     return detallecultivo.create({
          id_Cultivo: req.body.id_Cultivo,
          id_Agricultor: req.body.id_Agricultor,
          fechaInicio: req.body.fechaInicio,
          lugarCultivo: req.body.lugarCultivo
     }).then(detallecultivo => res.status(200).send(detallecultivo))
     .catch(error => res.status(400).send(error))
},

}
