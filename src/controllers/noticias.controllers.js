import Noticia from "../models/noticias";

const noticiasCtrl ={};

noticiasCtrl.getNoticias = async (req, res) => {
    try {
      // traigo todos los porductos de la coleccion con este metodo find de mongoose
      const datos = await Noticia.find();
      // le contesto al frontend que obtuve los objetos y los estoy por mandar con el codigo 200
      res.status(200).json(datos);
    } catch (error) {
      console.log(error);
      res.status(500).json({ mensaje: "Algo fallo" });
    }
  };

  noticiasCtrl.crearNoticia = async (req, res) => {
    console.log(req.body);
    try {
      // con esta sintaxis estoy extrayendole estos datos al objeto, y abajo igualando este valor a las propiedades homonimas
      const { noticiaTitulo, noticiaDescripcionBreve, noticiaDescripcionFull, noticiaImg, noticiaAutor, noticiaFecha, noticiaCategoria, noticiaDestacada } = req.body;
      const noticiaNueva = new Noticia({
        noticiaTitulo: noticiaTitulo, 
        noticiaDescripcionBreve: noticiaDescripcionBreve, 
        noticiaDescripcionFull: noticiaDescripcionFull, 
        noticiaImg: noticiaImg, 
        noticiaAutor: noticiaAutor, 
        noticiaFecha: noticiaFecha, 
        noticiaCategoria: noticiaCategoria,
        noticiaDestacada: noticiaDestacada,
        //   mongo crea el id automaticamente, se llama _id y son alfanumericos
      });
      // guardar nueva noticia en la base de datos
      await noticiaNueva.save();
      res.status(201).json({ mensaje: "Se agregó una nueva noticia" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ mensaje: "Error, no se pudo agregar tu noticia" });
      // por ejemplo cuando quiera agregar en postman dos porductos del mismo nombre,
      // ya que a este campo, en el modelo, le pusimos unique=true
    }
  };
  noticiasCtrl.borrarNoticia = async(req, res)=>{
      // desde el fron hacimos un fetch con una url y el id de la noticia a eliminar
      // ahora el id es el de mongo
      try{
          // quiero ver que request llega y si tiene parametros, y uso el parametro llamado id que cree en el roytes
          console.log(req.params.id)
          // una vez que consigo el id, borro con eeste metodo de nombre largo
          await Noticia.findByIdAndDelete(req.params.id)
          res.status(202).json({ mensaje: "Se eliminó tu noticia" })
      }catch(error){
          console.log(error)
          res.status(500).json({ mensaje: "Error, no se pudo eliminar tu noticia" })
      }
  }
  
  noticiasCtrl.modificarNoticia = async(req, res) =>{
      try{
          // primer parametro el id, segundo parametro, los datos que salen en el body
          await Noticia.findByIdAndUpdate(req.params.id, req.body)
          res.status(201).json({mensaje:"Tu noticia se ha modificado correctamente"})
      }catch(error){
          console.log(error)
          res.status(500).json({mensaje:"Error, no se pudo editar tu noticia"})
      }
  }

  export default noticiasCtrl;