const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log(`listening on port 3000`);
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});
const users = [{ id: 0 }];
app.get("users", (req, res) => {
  res.json(users);
});
app.get(`users/:id`, (req, res) => {
  res.json(users.find((user) => (user.id = req.params.id)));
});
