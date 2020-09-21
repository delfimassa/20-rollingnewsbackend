//Este archivo siempre se usa de esta manera, solo se cambia el URL segun la base de datos a conectar
import mongoose from "mongoose";

const url = "mongodb+srv://magicmilian:R0m1d2h3-93@cluster0.odeuv.gcp.mongodb.net/rollingnewsbackend";

mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Base de datos conectada");
});