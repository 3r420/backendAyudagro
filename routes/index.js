const { Router } = require('express');
var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const agricultor = require('../models').agricultor;
const categorias = require('../models').categorias;
const cultivo = require('../models').cultivo;
const detallecultivo = require('../models').detallecultivo;
const detallerespuesta = require('../models').detallerespuesta;
const detalleusoinsumos = require('../models').detalleusoinsumos;
const estudios = require('../models').estudios;
const insumos = require('../models').insumos;
const perfilacademico = require('../models').perfilacademico;
const pregunta = require('../models').pregunta;
const refiere = require('../models').refiere;
const registromultimedia = require('../models').registromultimedia;
const respuesta = require('../models').respuesta;

const controladorAgricultor = require ('../controllers/AgricultorController');
const controladorCategorias = require ('../controllers/CategoriasController');
const controladorCultivo = require ('../controllers/CultivoController');
const controladorDetallecultivo = require ('../controllers/DetallecultivoController');
const controladorDetallerespuesta = require ('../controllers/DetallerespuestaController');
const controladorDetalleusoinsumos = require ('../controllers/DetalleusoinsumosController');
const controladorEstudios = require ('../controllers/EstudiosController');
const controladorInsumos = require ('../controllers/InsumosController');
const controladorPerfilacademico = require ('../controllers/PerfilacademicoController');
const controladorPregunta = require ('../controllers/PreguntaController');
const controladorRefiere = require ('../controllers/RefiereController');
const controladorRegistromultimedia = require ('../controllers/RegistromultimediaController');
const controladorRespuesta = require ('../controllers/RespuestaController');


router.get('/listarAgricultor',controladorAgricultor.List);
router.get('/Agricultor/:id',controladorAgricultor.ListAt);
router.post('/nuevoAgricultor', controladorAgricultor.CreateAgricultor);
/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

module.exports = router;
