import User from "../models/users";
const userCtrl = {};

userCtrl.getUsers = async (req, res) => {
  try {
    const listaUsers = await User.find(); //Con este comando obtengo todos los usuarios
    res.status(200).json(listaUsers); //Respondo a la req con el objeto listaUsers
  } catch (err) {
    console.log(err);
    res.status(500).json({
      mensaje: "Ocurrio un error al consultar la lista de usuarios",
    }); //Creamos la respuesta en caso de error
  }
};

export default userCtrl;
