const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const dbName = 'ecart';

let db;

async function connectToDatabase() {
    if (db) return db; // Return existing connection if it exists

    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        db = client.db(dbName);
        console.log('Connected to Database');
        return db;
    } catch (error) {
        console.error('Failed to connect to Database', error);
        process.exit(1);
    }
}

module.exports = connectToDatabase;

const express = require('express');
const router = express.Router();
const connectToDatabase = require('../config/db');

router.get('/items', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const items = await db.collection('items').find().toArray();
        res.json(items);
    } catch (error) {
        console.error('Error fetching items', error);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/items', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const newItem = req.body;
        const result = await db.collection('items').insertOne(newItem);
        res.status(201).json(result.ops[0]);
    } catch (error) {
        console.error('Error adding item', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;

const express = require('express');
const bodyParser = require('body-parser');
const exampleRoute = require('./routes/exampleRoute');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', exampleRoute);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
