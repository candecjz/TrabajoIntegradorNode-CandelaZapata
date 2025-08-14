const mongoose = require("mongoose")

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/escuela")
    console.log("✅ Conexión exitosa a MongoDB")
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB:", error.message)
    process.exit(1)
  }
}

module.exports = dbConnect
