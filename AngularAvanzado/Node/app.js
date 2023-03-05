require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express() // instanciar la aplicación con express
app.use(cors())

const port = process.env.PORT || 3000

app.listen(port, () => { // escucha por el puerto 3000
    console.log(`http://localhost:${port}`)
})


//const multer = require("multer")