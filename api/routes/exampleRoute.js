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
