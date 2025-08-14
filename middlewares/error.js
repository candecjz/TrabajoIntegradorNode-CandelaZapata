const errorMiddleware = (error, req, res, next) => {
  console.error(error.stack)

  const statusCode = error.status || 500

  res.status(statusCode).send({
    mensaje: error.mensaje || "Error interno en el servidor",
    error: statusCode === 500 ? "Error interno" : error.mensaje,
  })
}

module.exports = errorMiddleware
