import express from "express";
import path from "path";
import session from "express-session";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";

//Routers
import { guestRouter } from "./routes/guest.js";
import { adminRouter } from "./routes/admin.js";
import { authRouter } from "./routes/auth.js";

const app = express();

// Set up view engine
app.set("view engine", "ejs");
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("views", path.join(__dirname, "views"));

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "mySecretkey",
    resave: false,
    saveUninitialized: false,
  })
);
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isAuthenticated;
  next();
});

//Routes
app.use("/", guestRouter);
app.use("/admin", adminRouter);
app.use("/", authRouter);

// Error handling
app.use((req, res) => {
  res.status(404).render("error", { message: "Page not found" });
});

// Start server
const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
