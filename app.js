const express = require("express");
const myData = require("./data/data");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/api/products", (req, res) => {
  res.send(myData);
});

app.listen(PORT, () => {
  console.log("My first server is running.. ");
});
