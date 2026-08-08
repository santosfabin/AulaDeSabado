const permissionMiddleware = (req, res, next) => {
  const isAdmin = req.user.userType.includes('admin');

  if (!isAdmin) {
    return res.status(403).json({
      error: 'Sem permissão para acessar este recurso',
    });
  }

  next();
};

module.exports = permissionMiddleware;
