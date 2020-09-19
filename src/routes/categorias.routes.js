//Esta hoja nos sirve para crear una ruta, pero la logica va a estar dentro de la carpeta controllers

import {Router} from 'express'; //Objeto con varias funciones para crear rutas
import categoriasController from '../controllers/categorias.controllers' //Importamos el archivo con la logica

const {getCategorias, postCategoria, deleteCategoria, putCategoria} = categoriasController;
const router = Router();

router.route('/').get(getCategorias).post(postCategoria);
router.route("/:id").delete(deleteCategoria).put(putCategoria);

export default router; 