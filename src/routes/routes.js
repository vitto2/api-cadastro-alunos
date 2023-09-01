const express = require("express");
const routes = express();
const { listaAlunos } = require("../controller/alunos");

routes.get("/alunos", listaAlunos);

module.exports = routes;
