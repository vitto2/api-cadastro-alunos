const { alunos } = require("../dados/bd");
let { identificadorAluno } = require("../dados/bd");

function listaAlunos(req, res) {
  return res.json(alunos);
}

function cadastraAluno(req, res) {
  const { nome, sobrenome, idade, curso } = req.body;

  if (!nome) {
    res.status(401).json({ mensagem: "O nome precisa ser preenchido." });
  }

  if (!sobrenome) {
    res.status(401).json({ mensagem: "O sobrenome precisa ser preenchido." });
  }
  if (!idade) {
    res.status(401).json({ mensagem: "O idade precisa ser preenchido." });
  }
  if (!curso) {
    res.status(401).json({ mensagem: "O curso precisa ser preenchido." });
  }

  const aluno = {
    id: identificadorAluno++,
    nome,
    sobrenome,
    idade,
    curso,
  };

  alunos.push(aluno);

  return res.status(201).json(aluno);
}
module.exports = {
  listaAlunos,
  cadastraAluno,
};
