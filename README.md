# Simple Node.js HTTP Server

This is a simple Node.js HTTP server that handles CRUD operations for a product resource.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm run dev
   ```

4. The server will start running on port 5000 by default. You can change the port by setting the `PORT` environment variable.

## Routes

- `GET /api/products`: Fetch all products.
- `GET /api/products/:id`: Fetch a single product by ID.
- `POST /api/products`: Create a new product.
- `PUT /api/products/:id`: Update an existing product.
- `DELETE /api/products/:id`: Delete a product by ID.

## Controller Functions

- `getProducts`: Handles GET requests to fetch all products.
- `getProduct`: Handles GET requests to fetch a single product by ID.
- `createProduct`: Handles POST requests to create a new product.
- `updateProduct`: Handles PUT requests to update an existing product.
- `deleteProduct`: Handles DELETE requests to delete a product by ID.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for any improvements or new features.

## License

This project is licensed under the [MIT License](LICENSE).
