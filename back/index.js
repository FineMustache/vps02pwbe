const express = require('express')
const cors = require('cors')
const Alunos = require('./routes/alunos.routes')

const app = express()
    .use(express.json())
    .use(cors())
    .use("/alunos", Alunos)

app.listen(5000, () => {
    console.log("Ouvindo a porta 5000")
})