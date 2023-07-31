const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//app.use() -->creates middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="product"></input><input type="number" name="size"></input><button type="submit">Add Product</button></form>'
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from express</h1>");
});

app.listen(3000, () => {
  console.log("Server is working on the port 3000");
});
