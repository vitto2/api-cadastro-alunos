function autenticacion(req, res, next) {
  const { password } = req.query;

  if (password == "cubos123") {
    next();
  }

  res.status(401).json({
    mensagem: "A senha está incorreta ou não foi inserida.",
  });
}
