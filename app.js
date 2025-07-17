import express from "express";
const app = express();


app.get("/", (req, res) => {
  res.send("Here is the list of all products.");
});

app.get("/user/:userId", (req, res) => {
  const id=req.params.userId;
  const name=req.query.name;
  const age= req.query.age;
  const role =req.query.role;
  res.send(`id is ${id} , name is ${name}, age is ${age} , role is ${role}`);
});



app.listen(3000, () => {
  console.log("✅ Server running on http://localhost:3000");
});
