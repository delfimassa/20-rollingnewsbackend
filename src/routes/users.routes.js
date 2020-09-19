//Esta hoja nos sirve para crear una ruta, pero la logica va a estar dentro de la carpeta controllers

import {Router} from 'express'; //Objeto con varias funciones para crear rutas
import usersController from '../controllers/users.controllers' //Importamos el archivo con la logica

const {getUsers} = usersController;
const router = Router();

router.route('/').get(getUsers);

export default router; 