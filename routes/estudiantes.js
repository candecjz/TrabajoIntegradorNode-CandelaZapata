const express = require("express")
const errorMiddleware = require("../middlewares/error")
const Estudiante = require("../models/estudiante")

const router = express.Router()

// GET - Obtener todos los estudiantes
router.get("/", async (req, res, next) => {
  const { curso } = req.query
  let filtro = {}
  if (curso) {
    filtro = { cursos: { $in: [curso] } }
  }
  try {
    const estudiantes = await Estudiante.find(filtro)
    res.status(200).send(estudiantes)
  } catch (error) {
    next(errorMiddleware)
  }
})

// GET - Obtener un estudiante por ID
router.get("/:id", async (req, res, next) => {
  const { id } = req.params

  try {
    const estudiante = await Estudiante.findById(id)
    if (!estudiante) {
      return res.status(404).json({ error: "Estudiante no encontrado" })
    }
    res.json(estudiante)
  } catch (error) {
    next(errorMiddleware)
  }
})

// POST - Crear un nuevo estudiante
router.post("/", async (req, res, next) => {
  const { nombre, apellido, email, cursos } = req.body

  try {
    const nuevoEstudiante = new Estudiante({ nombre, apellido, email, cursos })
    await nuevoEstudiante.save()
    res.status(200).json(nuevoEstudiante)
  } catch (error) {
    next(errorMiddleware)
  }
})

// PUT - Actualizar un estudiante por ID
router.put("/:id", async (req, res, next) => {
  try {
    const estudiante = await Estudiante.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )

    if (!estudiante) {
      return res.status(404).json({ error: "Estudiante no encontrado" })
    }

    res.status(200).send(estudiante)
  } catch (error) {
    next(errorMiddleware)
  }
})

// DELETE - Eliminar un estudiante por ID
router.delete("/:id", async (req, res, next) => {
  try {
    const estudiante = await Estudiante.findByIdAndDelete(req.params.id)

    if (!estudiante) {
      return res.status(404).send({ error: "Estudiante no encontrado" })
    }

    res.status(200).send({ mensaje: "Estudiante eliminado correctamente" })
  } catch (error) {
    next(errorMiddleware)
  }
})

module.exports = router
