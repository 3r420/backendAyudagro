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
const RespuestaController = require('../controllers/RespuestaController');
const controladorRespuesta = require ('../controllers/RespuestaController');


router.get('/listarAgricultor',controladorAgricultor.List);
router.get('/Agricultor/:id',controladorAgricultor.ListAt);
router.post('/nuevoAgricultor', controladorAgricultor.CreateAgricultor);

router.get('/categorias',controladorCategorias.List);
router.post('/nuevaCategorias',controladorCategorias.ListAt);

router.get('/cultivo',controladorCultivo.List);
router.post('/NuevoCultivo',controladorCultivo.CreateCultivo);

router.get('/detallecultivo',controladorDetallecultivo.List);
router.post('/NuevoDetallecultivo',controladorDetallecultivo.CreateDetallecultivo);

router.get('/detalleRespuesta',controladorDetallerespuesta.List);
router.post('/NuevaRespuesta',controladorRespuesta.CreateRespuesta);

router.get('/estudios',controladorEstudios.List);
router.post('/NuevoEstudios',controladorEstudios.CreateEstudios);

router.get('/insumos',controladorInsumos.List);
router.post('/NuevoInsumos',controladorInsumos.CreateInsumos);

router.get('/perfilacademico',controladorPerfilacademico.List);
router.post('/NuevoPerfilAcademico',controladorPerfilacademico.CreatePerfilacademico);

router.get('/pregunta',controladorPregunta.List);
router.post('/Nuevapregunta',controladorPregunta.CreatePregunta);

router.get('/refiere',controladorRefiere.List);
router.post('/NuevoRefiere',controladorRefiere.CreateRefiere);

router.get('/registromultimedia',controladorRegistromultimedia.List);
router.post('/NuevoRegistroMultimedia',controladorRegistromultimedia.CreateRegistromultimedia);

router.get('/respuesta',controladorRespuesta.List);
router.post('/NuevaRespuesta',controladorRespuesta.CreateRespuesta);


router.get('/Pregunta_xxx', controladorPregunta.ListPreguntas_registrosMultimedia);


/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

module.exports = router;
