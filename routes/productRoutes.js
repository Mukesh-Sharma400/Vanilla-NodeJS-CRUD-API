const { v4: uuid } = require("uuid");
const products = require("../data/products");
const { writeDataToFile } = require("../utils/helper");

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
        reject("Product Not Found");
      }
    } catch (error) {
      // If an error occurs, reject the promise
      reject(error);
    }
  });
}

function create(product) {
  return new Promise((resolve, reject) => {
    try {
      // Generate a unique ID for the new product
      const newProduct = { id: uuid(), ...product };

      // Add the new product to the list of products
      products.push(newProduct);

      // Write the updated list of products to the file
      writeDataToFile("./data/products.json", products);

      // Resolve the promise with the newly created product
      resolve(newProduct);
    } catch (error) {
      // If an error occurs, reject the promise
      reject(error);
    }
  });
}

function update(id, product) {
  return new Promise((resolve, reject) => {
    try {
      // Use findIndex to get the index of the product
      const index = products.findIndex((p) => p.id === id);

      if (index === -1) {
        // If product not found, reject the promise with an appropriate message
        reject("Product Not Found");
        return;
      }

      products[index] = { id, ...product };

      // Write the updated list of products to the file
      writeDataToFile("./data/products.json", products);

      // Resolve the promise with the newly created product
      resolve(products[index]);
    } catch (error) {
      // If an error occurs, reject the promise
      reject(error);
    }
  });
}

// Export the functions to be used in other modules
module.exports = { findAll, findByID, create, update };
