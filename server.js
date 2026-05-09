import express from "express";
import { fileURLToPath } from "url";
import path from "path";

// Environment
const NODE_ENV = process.env.NODE_ENV?.toLowerCase() || "production";
const PORT = process.env.PORT || 3000;

// ES module __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ---------------------
// Middleware
// ---------------------

// Serve static files from public/
app.use(express.static(path.join(__dirname, "public")));

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));

// ---------------------
// Routes (async arrow functions)
// ---------------------
app.get("/", async (req, res) => {
  res.render("home", { title: "Home" });
});

app.get("/organizations", async (req, res) => {
  res.render("organizations", { title: "Our Partner Organizations" });
});

app.get("/projects", async (req, res) => {
  res.render("projects", { title: "Service Projects" });
});

app.get("/categories", async (req, res) => {
  res.render("categories", { title: "Service Project Categories" });
});

// ---------------------
// Start server
// ---------------------
app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
  console.log(`Environment: ${NODE_ENV}`);
});
