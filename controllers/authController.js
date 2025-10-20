// controllers/authController.js
import credentials from "../config/auth.js";

const getLogin = (req, res) => {
  res.render("auth/login", { error: null });
};

const postLogin = (req, res) => {
  const { user, pass } = req.body;
  if (user === credentials.username && pass === credentials.password) {
    req.session.isAuthenticated = true;
    res.redirect("/admin");
  } else {
    res.render("auth/login", { error: "Invalid credentials" });
  }
};

const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};

export { postLogin, logout, getLogin };
