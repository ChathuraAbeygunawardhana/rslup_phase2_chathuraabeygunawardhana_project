# Simple Node.js Project

This is a simple Node.js project that sets up a basic Express.js server with a few API endpoints.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone <repository_url>
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

The server will run on port 5000 by default, or you can specify a different port using the `PORT` environment variable.

## Usage

- Visit the root endpoint to see a simple JSON response:

  ```
  GET / => { "message": "Hello from server!" }
  ```

- Visit the `/api/posts` endpoint to see a "posts page" response:

  ```
  GET /api/posts => "posts page"
  ```

- Visit the `/api/users` endpoint to see a "users page" response:

  ```
  GET /api/users => "users page"
  ```

## Configuration

You can configure the server port by setting the `PORT` environment variable. If `PORT` is not set, the server will default to port 5000.

## Author

- [Chathura Abeygunawardhana](https://github.com/chathuraAbeygunawardhana)
