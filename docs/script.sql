drop database if exists senai_cursos;
create database senai_cursos charset=UTF8 collate utf8_general_ci;

use senai_cursos;

CREATE TABLE alunos(
    id int not null PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) not null,
    nascimento VARCHAR(10) not null
);

CREATE TABLE cursos(
    id int not null PRIMARY KEY AUTO_INCREMENT,
    curso varchar(50) not null,
    duracao int not null
);

CREATE TABLE cursados(
    aluno int not null,
    curso int not null,
    data varchar(10) not null,
    FOREIGN KEY (aluno) REFERENCES alunos(id) ON DELETE CASCADE,
    FOREIGN KEY (curso) REFERENCES cursos(id) ON DELETE CASCADE
);

CREATE VIEW vw_cursados AS
SELECT a.id, a.nome, a.nascimento, c.id as id_curso, c.curso, c.duracao, cs.data FROM alunos a
LEFT JOIN cursados cs on a.id = cs.aluno
LEFT JOIN cursos c on c.id = cs.curso;

LOAD DATA INFILE 'C:/Users/des/Documents/vps02pwbe/docs/alunos.csv'
INTO TABLE alunos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;
LOAD DATA INFILE 'C:/Users/des/Documents/vps02pwbe/docs/cursos.csv'
INTO TABLE cursos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/des/Documents/vps02pwbe/docs/cursados.csv'
INTO TABLE cursados
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;