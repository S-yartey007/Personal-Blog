import { getDirname } from "../utils/utils.js";
import fs from "fs";
import path from "path";

function addArticle(article) {
  const articlesDir = path.join(
    getDirname(import.meta.url),
    "../data/articles"
  );
  //file path for saving article
  const filePath = path.join(articlesDir, `${article.id}.json`);
  fs.writeFileSync(filePath, JSON.stringify(article, null, 2), (err) => {
    if (err) {
      console.error("Error saving article:", err);
      return "error";
    }
    console.log(`✅ Article "${title}" added successfully`);
  });
}

export { addArticle };
