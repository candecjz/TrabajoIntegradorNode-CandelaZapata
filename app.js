const express = require("express")
const cors = require("cors")
const dbConnect = require("./config/db")
const estudianteRouter = require("./routes/estudiantes")

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hola mundo!")
})

app.use("/estudiantes", estudianteRouter)

dbConnect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Servidor corriendo correctamente en el puerto http://localhost:${PORT}`
      )
    })
  })
  .catch((error) => {
    console.log("El servidor no funciona :c", error)
  })
