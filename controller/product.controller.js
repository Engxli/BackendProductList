let productList = require("../data/data");

// function that adds to the data a new product
const addProduct = (newProduct) => {
  if (productList.length != 0) {
    newProduct.id = productList[productList.length - 1].id + 1;
  } else {
    newProduct.id = 1;
  }
  newProduct.slug = newProduct.name.split(" ").join("-");
  productList.push(newProduct);
};

//----- get ----- "/api/products"
exports.fetchAllProducts = (req, res) => {
  res.json(productList);
};

//----- get ----- "/api/products/:id"
exports.getProductId = (req, res) => {
  const { id } = req.params;
  if (productList.find((product) => +product.id === +id)) {
    res.json(productList.filter((product) => +product.id === +id));
  } else {
    res.status(404).json({ msg: `the product id of [${id}] is not found` });
  }
};

//----- post ----- "/api/products"
exports.createNewProduct = (req, res) => {
  const newData = { ...req.body };
  addProduct(newData);
  res.json(newData);
};

//----- delete ----- "/api/products/:id"
exports.deleteProductId = (req, res) => {
  const { id } = req.params;
  if (productList.find((product) => +product.id === +id)) {
    productList = productList.filter((product) => +product.id !== +id);
    res.end();
  } else {
    res.status(404).json({ msg: `the product id of [${id}] is not found` });
  }
};
