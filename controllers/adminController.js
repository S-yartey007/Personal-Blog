// controllers/adminController.js
const getDashboard = (req, res) => {
  res.render("admin/dashboard");
};

const getAddArticle = (req, res) => {
  res.render("admin/add");
};

const postAddArticle = (req, res) => {
  // TODO: Save new article
  res.redirect("/admin");
};

const getEditArticle = (req, res) => {
  res.render("admin/edit");
};

const postEditArticle = (req, res) => {
  // TODO: Update existing article
  res.redirect("/admin");
};

const deleteArticle = (req, res) => {
  // TODO: Delete article
  res.redirect("/admin");
};

export {
  getAddArticle,
  getDashboard,
  getEditArticle,
  postAddArticle,
  postEditArticle,
  deleteArticle,
};
