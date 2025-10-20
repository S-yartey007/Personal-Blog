// routes/admin.js
import express from "express";
const adminRouter = express.Router();
import {
  getAddArticle,
  getDashboard,
  getEditArticle,
  postAddArticle,
  postEditArticle,
  deleteArticle,
} from "../controllers/adminController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { getArticlePage } from "../controllers/adminController.js";

// Admin dashboard and CRUD routes
adminRouter.get("/", authMiddleware, getDashboard);
adminRouter.get("/add", authMiddleware, getAddArticle);
adminRouter.post("/add", authMiddleware, postAddArticle);
adminRouter.get("/edit/:id", authMiddleware, getEditArticle);
adminRouter.post("/edit/:id", authMiddleware, postEditArticle);
adminRouter.get("/delete/:id", authMiddleware, deleteArticle);
adminRouter.get("/article/:id", authMiddleware, getArticlePage);

export { adminRouter };
