function authentication(req, res, next) {
  const { password } = req.query;

  if (password == "cubos123") {
    return next();
  }

  res.status(401).json({
    mensagem: "A senha está incorreta ou não foi inserida.",
  });
}

module.exports = authentication;
