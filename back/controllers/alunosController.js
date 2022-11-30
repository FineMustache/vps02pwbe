const Aluno = require('../models/Aluno')
const Composite = require('../models/Composite')
const con = require('../dao/connection')

const create = (req, res) => {
    con.query(Aluno.create(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end()
        } else {
            res.status(500).json(err).end()
        }
    })
}

const read = (req, res) => {
    con.query(Aluno.read(req.params), (err, result) => {
        if (err == null) {
            res.status(201).json(Composite.aluno(result)).end()
        } else {
            res.status(500).json(err).end()
        }
    })
}

const readAll = (req, res) => {
    con.query(Aluno.readAll(), (err, result) => {
        if (err == null) {
            res.status(201).json(result).end()
        } else {
            res.status(500).json(err).end()
        }
    })
}

const update = (req, res) => {
    con.query(Aluno.update(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end()
        } else {
            res.status(500).json(err).end()
        }
    })
}

const del = (req, res) => {
    con.query(Aluno.del(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end()
        } else {
            res.status(500).json(err).end()
        }
    })
}

module.exports = {
    create,
    read,
    readAll,
    update,
    del
}