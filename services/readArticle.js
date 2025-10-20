import { getDirname } from "../utils/utils.js";
import fs from "fs";
import path from "path";

function readArticles() {
  const articlesDir = path.join(
    getDirname(import.meta.url),
    "../data/articles"
  );
  const articles = fs.readdirSync(articlesDir);
  if (articles.length === 0) {
    return [];
  } else {
    return articles
      .filter((file) => file.endsWith(".json"))
      .map((file) => {
        const filePath = path.join(articlesDir, file);
        const data = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(data);
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }
}

export { readArticles };
