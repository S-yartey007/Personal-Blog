// controllers/guestController.js
const getHomePage = (req, res) => {
  // TODO: Load and render articles
  res.render("guest/home");
};

const getArticlePage = (req, res) => {
  // TODO: Load and render single article
  res.render("guest/article");
};

export { getHomePage, getArticlePage };
