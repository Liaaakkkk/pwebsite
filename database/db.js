const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect
    (
        "mongodb+srv://alencarlins07_db_user:F0YPLShMmprajh3V@cluster0.fy8jfr9.mongodb.net/?appName=Cluster0" );

    console.log("Banco de dados conectado com sucesso");
  } catch (err) {
    console.log("Erro ao tentar conectar ao banco de dados:", err);
  }
};

module.exports = connectDatabase;