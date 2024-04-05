const products = require("../data/products");

// Function to find all products
function findAll() {
  return new Promise((resolve, reject) => {
    try {
      // Resolve the promise with all products
      resolve(products);
    } catch (error) {
      // If an error occurs, reject the promise
      reject(error);
    }
  });
}

// Function to find a product by its ID
function findByID(id) {
  return new Promise((resolve, reject) => {
    try {
      // Find the product with the given ID
      const product = products.find((product) => product.id === id);
      // If the product is found, resolve the promise with it
      if (product) {
        resolve(product);
      } else {
        // If the product is not found, reject the promise with an error message
        reject("Product not found");
      }
    } catch (error) {
      // If an error occurs, reject the promise
      reject(error);
    }
  });
}

// Export the functions to be used in other modules
module.exports = { findAll, findByID };
