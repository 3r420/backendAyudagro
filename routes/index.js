const { Router } = require('express');
var express = require('express');
var router = express.Router();
//constantes del llamado a los controladores
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

//rutas de la tabla Agricultor
router.get('/listarAgricultor',controladorAgricultor.List);
router.get('/Agricultor/:id',controladorAgricultor.ListAt);
router.post('/nuevoAgricultor', controladorAgricultor.CreateAgricultor);


//rutas de la tabla categorias
router.get('/categorias',controladorCategorias.List);
router.post('/nuevaCategorias',controladorCategorias.ListAt);


//rutas de la tabla cultivos
router.get('/cultivo',controladorCultivo.List);
router.post('/NuevoCultivo',controladorCultivo.CreateCultivo);


//rutas de la tabla detalleCultivos
router.get('/detallecultivo',controladorDetallecultivo.List);
router.post('/NuevoDetallecultivo',controladorDetallecultivo.CreateDetallecultivo);


//rutas de la tabla detalleRespuesta
router.get('/detalleRespuesta',controladorDetallerespuesta.List);

//rutas de la tabla Respuesta
router.get('/respuesta',controladorRespuesta.List);
router.post('/NuevaRespuesta',controladorRespuesta.CreateRespuesta);


//rutas de la tabla estudios
router.get('/estudios',controladorEstudios.List);
router.post('/NuevoEstudios',controladorEstudios.CreateEstudios);

//rutas de la tabla insumos
router.get('/insumos',controladorInsumos.List);
router.post('/NuevoInsumos',controladorInsumos.CreateInsumos);


//rutas de la tabla perfilAcademico
router.get('/perfilacademico',controladorPerfilacademico.List);
router.post('/NuevoPerfilAcademico',controladorPerfilacademico.CreatePerfilacademico);


//rutas de la tabla pregunta
router.get('/pregunta',controladorPregunta.List);
router.post('/Nuevapregunta',controladorPregunta.CreatePregunta);


//rutas de la tabla refiere
router.get('/refiere',controladorRefiere.List);
router.post('/NuevoRefiere',controladorRefiere.CreateRefiere);


//rutas de la tabla registromultimedia
router.get('/registromultimedia',controladorRegistromultimedia.List);
router.post('/NuevoRegistroMultimedia',controladorRegistromultimedia.CreateRegistromultimedia);


router.get('/Pregunta_xxx', controladorPregunta.ListPreguntas_registrosMultimedia);


/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

module.exports = router;
