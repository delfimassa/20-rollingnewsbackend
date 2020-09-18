import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path"; //Permite usar el middleware que da acceso a la carpeta PUBLIC
import './database'; //Importamos el archivo base de datos
import categoriasRouter from './routes/productos.routes'
import noticiasRouter from './routes/productos.routes'
import usersRouter from './routes/productos.routes'

//Instanciamos express
const app = express();

//Seteamos la variable port con app.set
app.set("port", process.env.PORT || 4000);
//Especificamos el puerto a escuchar
app.listen(app.get("port"), () => {
  console.log("Estamos escuchando el puerto " + app.get("port"));
});

//Middlewares - Sirven para ejecutar antes de que llegue a la ruta
app.use(morgan("dev"));
app.use(cors());
app.use(express.json()); //Este ayuda para que el backend entienda JSON
app.use(express.urlencoded({ extended: true })); //Este ayuda para que el backend entienda JSON
app.use(express.static(path.join(__dirname, "../public"))) //Permitir acceder a la carpeta PUBLIC

//Utilizando una ruta cuando ya definimos la misma en otro archivo
app.use('/categorias', categoriasRouter);
app.use('/noticias', noticiasRouter);
app.use('/users', usersRouter);