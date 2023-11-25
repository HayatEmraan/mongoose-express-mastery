# Mongoose Express CRUD Mastery

Developed a Node.js Express application with TypeScript as the programming language, integrating MongoDB with Mongoose for user data and order management. Ensure data integrity through validation using Joi/Zod.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/HayatEmraan/mongoose-express-mastery

   ```

2. Navigate to the project directory:

   ```bash
   npm install
   # or
   yarn
   ```

3. First, run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

## DotENV Configuration
 ```bash
   NODE_ENV=development
   DB_URL=mongodb://localhost:27017
   PORT=5000
   ```



## API Reference

#### 1. Create a new user

```http
  POST /api/users
```
- Request Body:

```json
{
    "userId": "number",
    "username": "string",
    "password": "string",
    "fullName": {
        "firstName": "string",
        "lastName": "string"
    },
    "age": "number",
    "email": "string",
    "isActive": "boolean",
    "hobbies": [
        "string",
        "string"
    ],
    "address": {
        "street": "string",
        "city": "string",
        "country": "string"
    }
}
```
- Response:

```json
{
    "success": true,
    "message": "User created successfully!",
    "data": {
        "userId": "number",
        "username": "string",
        "fullName": {
            "firstName": "string",
            "lastName": "string"
        },
        "age": "number",
        "email": "string",
        "isActive": "boolean",
        "hobbies": [
            "string",
            "string"
        ],
        "address": {
            "street": "string",
            "city": "string",
            "country": "string"
        }
    }
}
```

#### 2. Retrieve a list of all users

```http
  GET /api/users
```
- Response

```json
{
    "success": true,
    "message": "Users fetched successfully!",
    "data": [
        {
            "username": "string",
            "fullName": {
                "firstName": "string",
                "lastName": "string"
            },
            "age": "number",
            "email": "string",
            "address": {
                "street": "string",
                "city": "string",
                "country": "string"
            }
        },
        // more objects...
    ]
}
```

#### 3. Retrieve a specific user by ID

```http
  GET /api/users/:userId
```
- Response

```json
{
    "success": true,
    "message": "User fetched successfully!",
    "data": {
        "userId": "number",
        "username": "string",
        "fullName": {
            "firstName": "string",
            "lastName": "string"
        },
        "age": "number",
        "email": "string",
        "isActive": "boolean",
        "hobbies": [
            "string",
            "string"
        ],
        "address": {
            "street": "string",
            "city": "string",
            "country": "string"
        }
    }
}
```

#### 4. Update user information

```http
  PUT /api/users/:userId
```
- Request Body:
```json
{
    "userId": "number",
    "username": "string",
    "password": "string",
    "fullName": {
        "firstName": "string",
        "lastName": "string"
    },
    "age": "number",
    "email": "string",
    "isActive": "boolean",
    "hobbies": [
        "string",
        "string"
    ],
    "address": {
        "street": "string",
        "city": "string",
        "country": "string"
    }
}
```
- Response

```json
{
    "success": true,
    "message": "User updated successfully!",
    "data": {
        "userId": "number",
        "username": "string",
        "fullName": {
            "firstName": "string",
            "lastName": "string"
        },
        "age": "number",
        "email": "string",
        "isActive": "boolean",
        "hobbies": [
            "string",
            "string"
        ],
        "address": {
            "street": "string",
            "city": "string",
            "country": "string"
        }
    }
}
```

#### 5. Delete a user

```http
  DELETE /api/users/:userId
```
- Response
```json
{
    "success": true,
    "message": "User deleted successfully!",
    "data" : null
}
```

#### 6. Order Management
6.1 Add New Product in Order:

```http
  PUT /api/users/:userId/orders
```
- Request Body:

```json
{
    "productName": "string",
    "price": "number",
    "quantity": "number"
}
```

- Response: 

```json
{
    "success": true,
    "message": "Order created successfully!",
    "data": null
}
```

6.2 Retrieve all orders for a specific user:
```http
  GET /api/users/:userId/orders
```
- Response:
```json
{
    "success": true,
    "message": "Order fetched successfully!",
    "data": {
        "orders": [
            {
                "productName": "Product 1",
                "price": 23.56,
                "quantity": 2
            },
            {
                "productName": "Product 2",
                "price": 23.56,
                "quantity": 5
            }
        ]
    }
}
```

6.3 Calculate Total Price of Orders for a Specific User:
```http
  GET /api/users/:userId/orders/total-price
```
- Response:
```json
{
    "success": true,
    "message": "Total price calculated successfully!",
    "data": {
        "totalPrice": 454.32
    }
}
```
