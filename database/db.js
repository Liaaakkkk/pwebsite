const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    console.log("Tentando conectar...");

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Banco conectado com sucesso");
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDatabase;