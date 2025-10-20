// middlewares/authMiddleware.js
const authMiddleware = (req, res, next) => {
  if (req.session && req.session.isAuthenticated) {
    next();
  } else {
    res.redirect("/login");
  }
};

export { authMiddleware };
