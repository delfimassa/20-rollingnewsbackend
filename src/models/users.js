import mongoose, { Schema } from "mongoose";

//Definimos la estructura de la base de datos propiedad a propiedad
const userSchema = new Schema({
    nombreUsuario: {
    type: String,
    required: true,
    unique: true,
  },
  passwordUsuario:{
      type: String,
      required: true,
  }
},{timestamps: true}); //Sirve para permitir a mongo crear una propiedad para cada objeto creado o actualizado que registra el tiempo de la accion

const User = mongoose.model("user", userSchema);

export default User;