const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'productdb'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');

    connection.query("SELECT * FROM users WHERE age > 25", (err, results) => {
        if (err) throw err;
        console.log('SQL Results:', results);
    });

    connection.query("INSERT INTO users (name, age) VALUES (?, ?)", ["Alice", 30], (err) => {
        if (err) throw err;
        console.log('User inserted into SQL database');
    });
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/productdb', { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model('User', new mongoose.Schema({ name: String, age: Number }));

User.find({ age: { $gt: 25 } }, (err, users) => {
    if (err) throw err;
    console.log('MongoDB Results:', users);
});
