import fs from "fs";
import path from "path";
import { readArticles } from "../services/readArticle.js";
import { getDirname } from "../utils/utils.js";
// controllers/guestController.js
const getHomePage = (req, res) => {
  // TODO: Load and render articles
  const articles = readArticles();

  res.render("guest/home", { articles });
};

const getArticlePage = (req, res) => {
  // TODO: Load and render single article
  const id = req.params.id;
  const filePath = path.join(
    getDirname(import.meta.url),
    `../data/articles/${id}.json`
  );
  if (!fs.existsSync(filePath)) {
    res.render("error", { message: "File does not exists" });
  } else {
    const data = fs.readFileSync(filePath, "utf-8");
    const article = JSON.parse(data);
    res.render("guest/article", { article });
  }
};

export { getHomePage, getArticlePage };
