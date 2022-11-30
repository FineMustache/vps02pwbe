const Aluno = require('./Aluno')
const Curso =  require('./Curso')

const aluno = (lista) => {
    let aluno = new Aluno(lista[0])
    let cursos = []
    lista.forEach(l => {
        cursos.push(new Curso(l))
    });

    cursos.forEach(c => {
        aluno.addCurso(c)
    })
    return aluno
}

module.exports = {
    aluno
}