const express = require("express");
const app = express();
const productRouter = require("./router/product.router");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", productRouter);

const PORT = 8000;
app.listen(PORT, () => {
  console.log("My first server is running.. ");
});
