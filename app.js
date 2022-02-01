const express = require("express");
const theData = require("./data/data");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.json(theData);
});

app.listen(PORT, () => {
  console.log("My first server is running.. ");
});
