import express from "express";
const app = express();

// Orders routes
app.get("/orders", (req, res, next) => {
  res.send("Here is the list of all orders");
});

app.post("/orders", (req, res, next) => {
  res.send("A new order has been created.");
});

// Users routes
app.get("/users", (req, res, next) => {
  res.send("Here is the list of all users");
});

app.post("/users", (req, res, next) => {
  res.send("A new user has been added");
});

app.listen(3000, () => {
  console.log("Server is up and running on port 3000! Ready to handle requests");
});
