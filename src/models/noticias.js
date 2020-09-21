import mongoose, { Schema } from "mongoose";
// schema es una clase y ahora hacemos u n nuevo objeto de esta clase
const noticiaSchema = new Schema({
  noticiaTitulo: {
    type: String,
    required: true,
    unique: true,
  },noticiaDescripcionBreve: {
    type: String,
    maxlength: 200,
    required: true,
  },noticiaDescripcionFull:{
    type: String,
    required: true,
  },noticiaImg:{
    type: String,
    required: true,
  },noticiaAutor:{
    type: String,
    required: true,
  },noticiaFecha:{
    type: String,
    required: true,
  },categoria:{
    type: String,
    required: true,
  }
},{timestamps: true});

// creo una variable donde iran las noticias que le pido que cree a mongoose, en primer parametro el nombre de la coleccion, en segundo el modelo
const Noticia = mongoose.model("noticia", noticiaSchema)
export default Noticia;
