const { alunos } = require("../dados/bd");
let { identificadorAluno } = require("../dados/bd");

function listaAlunos(req, res) {
  const { id } = req.params;
  const alunoFindId = alunos.find((aluno) => aluno.id == id);

  if (!id || alunos.length == 0) {
    return res.json(alunos);
  }

  if (id < 1) {
    return res
      .status(401)
      .json({ mensagem: "O id precisa ser um número valido. " });
  }

  if (!alunoFindId) {
    return res
      .status(404)
      .json({ mensagem: "O aluno não foi encontrado na lista." });
  }

  return res.status(200).json(alunoFindId);
}

function cadastraAluno(req, res) {
  const { nome, sobrenome, idade, curso } = req.body;

  nome.trim();

  if (!nome || nome.trim() == "") {
    return res.status(400).json({ mensagem: "O nome precisa ser preenchido." });
  }

  if (!sobrenome || sobrenome.trim() == "") {
    return res
      .status(400)
      .json({ mensagem: "O sobrenome precisa ser preenchido." });
  }

  if (!idade || idade < 18) {
    return res.status(400).json({
      mensagem:
        "A idade do aluno precisar maior que 18 e o campo não pode estar vazio.",
    });
  }

  if (!curso || curso.trim() == "") {
    return res
      .status(400)
      .json({ mensagem: "O curso precisa ser preenchido." });
  }

  const aluno = {
    id: identificadorAluno++,
    nome,
    sobrenome,
    idade,
    curso,
  };

  alunos.push(aluno);

  return res.status(201).json();
}
module.exports = {
  listaAlunos,
  cadastraAluno,
};
