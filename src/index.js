const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log(`listening on port 3000`);
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});
const users = [];
app.get("/users", (req, res) => {
  res.json(users);
});
app.post("/user", (req, res) => {
  const newUser = { id: users.length };
  users.push(newUser);
  res.status(200).json(newUser);
});
app.get(`/user/:id`, (req, res) => {
  res.send(users.find((user) => (user.id === +req.params.id)));
});
