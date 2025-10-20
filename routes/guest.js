// routes/guest.js
import express from "express";
const guestRouter = express.Router();
import { getHomePage, getArticlePage } from "../controllers/guestController.js";

guestRouter.get("/", getHomePage);
guestRouter.get("/article/:id", getArticlePage);

export { guestRouter };
