const express = require("express");
const authentication = require("./middlewares");
const routes = express();
const { listaAlunos, cadastraAluno } = require("./controller/alunos");

routes.use(authentication);

routes.get("/alunos/:id?", listaAlunos);
routes.post("/alunos", cadastraAluno);
module.exports = routes;
