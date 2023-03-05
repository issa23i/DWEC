const mongoose = require("mongoose");

const dbConnect = async () => {
  const DB_URI = process.env.DB_URI;
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('Conexión realizada con éxito con MongoDB a la Base de Datos :', mongoose.connection.db.databaseName);
  } catch (error) {
    console.error('Ocurrió un erro al acceder a MongoDB: ', err)
  }
};

module.exports = dbConnect;
