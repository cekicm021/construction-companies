const express = require("express");
let json = require("./companies.json");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

console.log(json);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
