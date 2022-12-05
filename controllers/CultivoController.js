const {Model } = require('sequelize');
const Sequelize = require('sequelize');
const cultivo = require('../models').cultivo;
const detalleCultivo=require('../models').detalleCultivo;
const detalleUsoInsumos=require('../models').detalleUsoInsumos

module.exports={

List(_,res){
              return cultivo.findAll({
               include: {
                    model: detalleUsoInsumos,
                  },
                  require:'true',
              })
              .then(cultivo => res.status(200).send(cultivo))
              .catch(error => res.status(400).send(error));
},
ListAt(req,res){
              return cultivo.findAll({
                            where: {
                                 id: req.params.id
                            }
              })
              .then(cultivo => res.status(200).send(cultivo))
              .catch(error => res.status(400).send(error))

},
Createcultivo(req, res){
     return cultivo.create({
          nombre: req.body.nombre,
          descripcion: req.body.descripcion,
     })
      
     .then(cultivo => res.status(200).send(cultivo))
     .catch(error => res.status(400).send(error))
},

}