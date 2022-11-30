class Aluno {
    cursos = []

    constructor(data){
        this.id = data.id !== undefined ? data.id : null
        this.nome = data.nome
        this.nascimento = data.nascimento
    }

    addCurso = (curso) => {
        this.cursos.push(curso)
    }

    static readAll = () => {
        return `SELECT * FROM alunos`
    }
    
    static read = (model) => {
        return `SELECT * FROM vw_cursados WHERE id = ${model.id}`
    }
    
    static create = (model) => {
        return `INSERT INTO alunos VALUES (DEFAULT, '${model.nome}', '${model.nascimento}')`
    }
    
    static update = (model) => {
        return `UPDATE alunos SET nome = '${model.nome}', nascimento = '${model.nascimento}' WHERE id = ${model.id}`
    }
    
    static del = (model) => {
        return `DELETE from alunos WHERE id = ${model.id}`
    }
}



module.exports = Aluno