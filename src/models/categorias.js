import mongoose, { Schema } from "mongoose";

//Definimos la estructura de la base de datos propiedad a propiedad
const categoriaSchema = new Schema({
    nombreCategoria: {
    type: String,
    required: true,
    unique: true
  }
},{timestamps: true}); //Sirve para permitir a mongo crear una propiedad para cada objeto creado o actualizado que registra el tiempo de la accion

const Categoria = mongoose.model("categoria", categoriaSchema);

export default Categoria;