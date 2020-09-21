//Esta hoja nos sirve para crear una ruta, pero la logica va a estar dentro de la carpeta controllers
import {Router} from "express";
import noticiasController from "../controllers/noticias.controllers";
// para no tener q escribir noticiasCotroller.getPrueba q es muy largo,
// extraemos la propiedad del objeto, lo desarmamos
const {getNoticias, crearNoticia, borrarNoticia, modificarNoticia} = noticiasController ;
const router = Router();
router.route("/noticias").get(getNoticias).post(crearNoticia);

router.route("/:id").delete(borrarNoticia).put(modificarNoticia)
// queremos poner en la url un parametro, para eso los:, 
// y las operaciones con el controlador a ejecutar en esta misma ruta
export default router;