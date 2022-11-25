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

//todas las rutas funcionales fueron probadas sin relaciones y con datos nulos. corregir y que no permita datos nulos

//rutas de la tabla Agricultor/faltan algunas relaciones
router.get('/listarAgricultor',controladorAgricultor.List);   //-->funciona
router.get('/Agricultor/:id',controladorAgricultor.ListAt);  //-->funciona 
router.post('/nuevoAgricultor', controladorAgricultor.CreateAgricultor);  //-->funciona


//rutas de la tabla categorias/fatltan relaciones
router.get('/categorias',controladorCategorias.List);  //-->funciona
router.post('/nuevaCategorias',controladorCategorias.CreateCategorias);//error 400 corregitdo



//rutas de la tabla cultivos
router.get('/cultivo',controladorCultivo.ListAt);//verificar error 400
router.post('/NuevoCultivo',controladorCultivo.CreateCultivo);//verificar su funcionaminento error 500


//rutas de la tabla detalleCultivos
router.get('/detallecultivo',controladorDetallecultivo.List);//verificar su funcionamiento 
router.post('/NuevoDetallecultivo',controladorDetallecultivo.CreateDetallecultivo);//verificar su funcionamiento


//rutas de la tabla detalleRespuesta
router.get('/detalleRespuesta',controladorDetallerespuesta.List);//verificar su funcionamiento error 500

//rutas de la tabla Respuesta
router.get('/respuesta',controladorRespuesta.List);//--> funciona bien
router.post('/NuevaRespuesta',controladorRespuesta.CreateRespuesta);//-->funciona buen las dos sin relaciones 


//rutas de la tabla estudios
router.get('/estudios',controladorEstudios.List);//-->error 500 verificar su funcionamiento
router.post('/NuevoEstudios',controladorEstudios.CreateEstudios);//-->error 500 verificar

//rutas de la tabla insumos
router.get('/insumos',controladorInsumos.List)//-->error 500 verificar
router.post('/NuevoInsumos',controladorInsumos.CreateInsumos);//--> erro 500 verificar


//rutas de la tabla perfilAcademico
router.get('/perfilacademico',controladorPerfilacademico.List);//-->error 500 
router.post('/NuevoPerfilAcademico',controladorPerfilacademico.CreatePerfilacademico);//-->error 500


//rutas de la tabla pregunta
router.get('/pregunta',controladorPregunta.List);//-->funciona bien 
router.post('/Nuevapregunta',controladorPregunta.CreatePregunta);//--funciona bien 


//rutas de la tabla refiere
router.get('/refiere',controladorRefiere.List);//-- funciona bien
router.post('/NuevoRefiere',controladorRefiere.CreateRefiere);//-->funciona pero con defecto hay que corregir el envio de datos


//rutas de la tabla registromultimedia
router.get('/registromultimedia',controladorRegistromultimedia.List); //-->funciona bien
router.post('/NuevoRegistroMultimedia',controladorRegistromultimedia.CreateRegistromultimedia);//-->funciona bien


router.get('/Pregunta_xxx', controladorPregunta.ListPreguntas_registrosMultimedia);//-->(ruta de prueba)funciona bien 


/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

module.exports = router;
