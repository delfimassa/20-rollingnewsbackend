import Categoria from "../models/categorias";
const categoriaCtrl = {};

categoriaCtrl.getCategorias = async (req, res) => {
  try {
    const listaCategorias = await Categoria.find(); //Con este comando obtengo todas las categorias
    res.status(200).json(listaCategorias); //Respondo a la req con el objeto listaProductos
  } catch (err) {
    console.log(err);
    res.status(500).json({
      mensaje: "Ocurrio un error al consultar la lista de categorias",
    }); //Creamos la respuesta en caso de error
  }
};

categoriaCtrl.postCategoria = async (req, res) => {
  console.log(req.body);
  try {
    const { nombreCategoria } = req.body;
    //Estas propiedades a continuacion salen del modelo creado, en este caso del modelo de categorias.js
    const categoriaNueva = new Categoria({
      nombreCategoria: nombreCategoria,
    });
    await categoriaNueva.save(); //Guardar objeto nuevo
    res.status(201).json({ mensaje: "Se agrego una nueva categoria" }); //Creamos la respuesta en caso de success
  } catch (err) {
    console.log(err);
    res.status(500).json({ mensaje: "Ocurrio un error al crear la categoria" }); //Creamos la respuesta en caso de error
  }
};

categoriaCtrl.deleteCategoria = async (req, res) => {
  try {
    console.log(req.params.id);
    await Categoria.findByIdAndDelete(req.params.id);
    res.status(202).json({ mensaje: "Se elimino correctamente la categoria" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al eliminar la categoria" });
  }
};

categoriaCtrl.putCategoria = async (req, res) => {
  try {
    await Categoria.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json({ mensaje: "La categoria fue modificada" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al modificar la categoria" });
  }
};

export default categoriaCtrl;
