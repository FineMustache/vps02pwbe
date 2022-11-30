const express = require('express')
const router = express.Router()

const Aluno = require('../controllers/alunosController')

router.get("/read", Aluno.readAll)
router.get("/:id", Aluno.read)
router.post("/create", Aluno.create)
router.put("/update", Aluno.update)
router.delete("/del", Aluno.del)

module.exports = router