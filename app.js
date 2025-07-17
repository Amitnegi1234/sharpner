import express from "express";
const app = express();

// Middleware to parse JSON body
app.use(express.json());

// Products Routes
app.get("/products", (req, res) => {
  res.send("Here is the list of all products.");
});

app.post("/products", (req, res) => {
  res.send("A new product has been added.");
});

// Categories Routes
app.get("/categories", (req, res) => {
  res.send("Here is the list of all categories.");
});

app.post("/categories", (req, res) => {
  res.send("A new category has been created.");
});

// Wildcard Route (404 Handler)
app.use((req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});

// Start server on port 4000
app.listen(4000, () => {
  console.log("✅ Server running on http://localhost:4000");
});
