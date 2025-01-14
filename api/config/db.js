const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const dbName = 'productdb';

let db;

async function connectToDatabase() {
    if (db) return db;

    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        db = client.db(dbName);
        console.log('Connected to MongoDB');
        return db;
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        process.exit(1);
    }
}

module.exports = connectToDatabase;
