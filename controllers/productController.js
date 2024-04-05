const { getReqData } = require("../utils/helper");
const Product = require("../routes/productRoutes");

// Function to handle GET request for fetching all products
async function getProducts(req, res) {
  try {
    // Fetch all products from the database
    const products = await Product.findAll();

    // Respond with the fetched products in JSON format
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (error) {
    // Log any errors that occur during the process
    console.error("Error in getProducts:", error);
    // Send an appropriate error response if an error occurs
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Internal Server Error" }));
  }
}

// Function to handle GET request for fetching a product by ID
async function getProduct(req, res, id) {
  try {
    // Find the product by ID in the database
    const product = await Product.findByID(id);

    // If the product is found, respond with it in JSON format
    if (product) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(product));
    } else {
      // If the product is not found, respond with a 404 error
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Product Not Found" }));
    }
  } catch (error) {
    // Log any errors that occur during the process
    console.error("Error in getProduct:", error);
    // Send an appropriate error response if an error occurs
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Internal Server Error" }));
  }
}

async function createProduct(req, res) {
  try {
    // Extract request body data
    const body = await getReqData(req);
    // Parse the JSON data from the request body
    const { name, description, price } = JSON.parse(body);

    // Create a product object with the parsed data
    const product = {
      name,
      description,
      price,
    };

    // Create a new product in the database
    const newProduct = await Product.create(product);

    // Respond with the newly created product and HTTP status 201
    res.writeHead(201, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(newProduct));
  } catch (error) {
    // Log any errors that occur during the process
    console.error("Error in createProduct:", error);
    // Send an appropriate error response if an error occurs
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Internal Server Error" }));
  }
}

async function updateProduct(req, res, id) {
  try {
    // Find the product by ID in the database
    const product = await Product.findByID(id);

    // If the product is found
    if (product) {
      // Extract request body data
      const body = await getReqData(req);
      // Parse the JSON data from the request body
      const { name, description, price } = JSON.parse(body);

      // Update a product object with the parsed data
      const productData = {
        name: name || product.name,
        description: description || product.description,
        price: price || product.price,
      };

      // Update a product in the database
      const updatedProduct = await Product.update(id, productData);

      // Respond with the updated product and HTTP status 200
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(updatedProduct));
    } else {
      // If the product is not found, respond with a 404 error
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Product Not Found" }));
    }
  } catch (error) {
    // Log any errors that occur during the process
    console.error("Error in updateProduct:", error);
    // Send an appropriate error response if an error occurs
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Internal Server Error" }));
  }
}

async function deleteProduct(req, res, id) {
  try {
    // Find the product by ID in the database
    const product = await Product.findByID(id);

    // If the product is found
    if (product) {
      // Delete a product in the database
      await Product.remove(id);

      // Respond with the deleted product and HTTP status 200
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: `Product ${id} removed` }));
    } else {
      // If the product is not found, respond with a 404 error
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Product Not Found" }));
    }
  } catch (error) {
    // Log any errors that occur during the process
    console.error("Error in deleteProduct:", error);
    // Send an appropriate error response if an error occurs
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Internal Server Error" }));
  }
}

// Export the functions to be used in other modules
module.exports = {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
