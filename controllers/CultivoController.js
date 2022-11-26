const Sequelize = require('sequelize');
const detallecultivo= require('../models/detallecultivo')
const cultivo = require('../models').Cultivo;

module.exports={

List(_,res){
              return cultivo.fanAll({})
              .then(cultivo => res.status(200).send(cultivo))
              .catch(error => res.status(400).send(error))
},
// ListAt(req,res){
//               return cultivo.findAll({
//                             where: {
//                                  id: req.params.id
//                             }
//               })
//               .then(cultivo => res.status(200).send(cultivo))
//               .catch(error => res.status(400).send(error))

// },
// CreateCultivo(req, res){
//      return cultivo.create({
//           nombre: req.body.nombre,
//          descripcion: req.body.descripcion
//      })
//      .then(cultivo => res.status(200).send(cultivo))
//      .catch(error => res.status(400).send(error))
// },

 }
