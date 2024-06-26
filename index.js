const http = require("http");
const {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("./controllers/productController");

const PORT = process.env.PORT || 5000;

// Create a server instance
const server = http.createServer((req, res) => {
  // Route handling
  if (req.url === "/api/products" && req.method === "GET") {
    // Handle GET request for fetching all products
    getProducts(req, res);
  } else if (
    req.url.match(/\/api\/products\/([0-9]+)/) &&
    req.method === "GET"
  ) {
    // Handle GET request for fetching a single product by ID
    const id = req.url.split("/")[3];
    getProduct(req, res, id);
  } else if (req.url === "/api/products" && req.method === "POST") {
    // Handle POST request for creating a new product
    createProduct(req, res);
  } else if (
    req.url.match(/\/api\/products\/([0-9]+)/) &&
    req.method === "PUT"
  ) {
    // Handle PUT request for updating a product
    const id = req.url.split("/")[3];
    updateProduct(req, res, id);
  } else if (
    req.url.match(/\/api\/products\/([0-9]+)/) &&
    req.method === "DELETE"
  ) {
    // Handle DELETE request for deleting a product
    const id = req.url.split("/")[3];
    deleteProduct(req, res, id);
  } else {
    // Handle invalid routes
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route Not Found" }));
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server Running on port: ${PORT}`);
});
