import { addArticle } from "../services/addArticle.js";
import { v4 } from "uuid";
import { readArticles } from "../services/readArticle.js";
import fs from "fs";
import path from "path";
import { getDirname } from "../utils/utils.js";
const getDashboard = (req, res) => {
  const articles = readArticles();

  res.render("admin/dashboard", { articles });
};

const getAddArticle = (req, res) => {
  res.render("admin/add");
};

const getArticlePage = (req, res) => {
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
    res.render("admin/article", { article });
  }
};
const postAddArticle = (req, res) => {
  // TODO: Save new article
  const { title, content, date } = req.body;
  if (!title || !content || !date) {
    res.render("error", { message: "All fields are required" });
  }
  const article = {
    id: v4(),
    title,
    content,
    date,
  };
  const result = addArticle(article);
  if (result === "error")
    res.render("error", { message: "failed to save article" });
  res.redirect("/admin");
};

const getEditArticle = (req, res) => {
  res.render("admin/edit");
};

const postEditArticle = (req, res) => {
  // TODO: Update existing article
  const id = req.params.id;
  const { title, content, date } = req.body;
  const articles = readArticles();
  const article = articles.filter((article) => article.id === id)[0];
  if (!article) {
    res.render("error", { message: "article does not exist" });
  } else {
    const __dirname = getDirname(import.meta.url);
    const filePath = path.join(__dirname, `../data/articles/${id}.json`);
    fs.writeFileSync(
      filePath,
      JSON.stringify(
        {
          id,
          title,
          content,
          date,
        },
        null,
        2
      )
    );
  }
  res.redirect("/admin");
};

const deleteArticle = (req, res) => {
  // TODO: Delete article
  const id = req.params.id;
  const articles = readArticles();
  const article = articles.filter((article) => article.id === id)[0];
  if (!article) {
    res.render("error", { message: "cannot delete file, file does not exist" });
  } else {
    const __dirname = getDirname(import.meta.url);
    const filePath = path.join(__dirname, `../data/articles/${id}.json`);
    fs.unlinkSync(filePath);
  }
  res.redirect("/admin");
};

export {
  getAddArticle,
  getDashboard,
  getEditArticle,
  postAddArticle,
  postEditArticle,
  deleteArticle,
  getArticlePage,
};
