# Node.js MongoDB Backend

This repository contains a simple Node.js backend API integrated with MongoDB, demonstrating basic CRUD (Create, Read, Update, Delete) operations. The backend uses Express for routing and the native MongoDB driver for database operations.

## Installation Instructions

Clone the Repository

### git clone (https://github.com/jabeca86/jacobo-alejandro-benitez-canavati)
### cd <repository-folder>

## Install Dependencies
Ensure you have Node.js and npm installed. Run:

### npm install

Set Up MongoDB

Install MongoDB and start the MongoDB server on your system.

Alternatively, use a cloud-hosted MongoDB service like MongoDB Atlas.

Update the database configuration in config/db.js with your MongoDB URI and database name:

const uri = 'mongodb://localhost:27017';
const dbName = 'productdb';
## Start the Server

### node app.js

By default, the server runs on port 3000. You can access it at:

### http://localhost:3000

## API Endpoints

Base URL

http://localhost:3000/api

## Endpoints

1. GET /api/items

Retrieve all items from the database.

Response:

[
  { "_id": "id", "name": "Item Name", "price": 10.99 }
]

2. POST /api/items

Add a new item to the database.

Request Body:

{ "name": "New Item", "price": 10.99 }

Response:

{ "_id": "id", "name": "New Item", "price": 10.99 }

## Features

Lightweight and minimal backend architecture.

Modular and scalable code structure.

Basic CRUD operations with MongoDB.

Supports JSON-based API requests.

## Requirements

Node.js (>=14.0.0)

MongoDB (>=4.0)

npm (>=6.0.0)

## Troubleshooting

Cannot connect to MongoDB:

Ensure the MongoDB server is running.

Verify the connection string in config/db.js.

Port already in use:

Change the port in app.js:

const PORT = process.env.PORT || 3000; // Update 3000 to another port