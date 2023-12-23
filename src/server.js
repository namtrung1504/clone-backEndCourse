const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3002;
const hostname = process.env.HOST_NAME;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/namtrung1", (req, res) => {
  res.send("NamTrung1");
});

app.get("/view", (req, res) => {
  res.render(path.join(__dirname, "./views/sample.ejs"));
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
