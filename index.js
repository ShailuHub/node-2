const http = require("http");
const express = require("express");
const app = express();

//app.use() -->creates middleware
app.use((req, res, next) => {
  console.log("I m first middleware");
  next();
});

app.use((req, res, next) => {
  console.log("I m next middleware");
  res.send("<h1>Hello i am from Express Side</h1>");
});

app.listen(3000, () => {
  console.log("Server is working on the port 3000");
});
