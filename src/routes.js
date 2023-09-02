const express = require("express");
const authentication = require("./middlewares");
const routes = express();
const {
  listaAlunos,
  cadastraAluno,
  deletaAluno,
} = require("./controller/alunos");

routes.use(authentication);

routes.get("/alunos/:id?", listaAlunos);
routes.post("/alunos", cadastraAluno);
routes.delete("/alunos/:id", deletaAluno);
module.exports = routes;
