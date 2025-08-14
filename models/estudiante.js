const mongoose = require("mongoose")

const estudianteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  cursos: [
    {
      type: String,
      enum: ["Matemática", "Historia", "Ciencias", "Arte"],
      required: true,
    },
  ],
})

const Estudiante = mongoose.model("Estudiante", estudianteSchema)
module.exports = Estudiante
