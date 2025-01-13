connection.query("SELECT * FROM users WHERE age > 25", (err, results) => {
    if (err) throw err;
    console.log(results);
});

const User = mongoose.model('User', new mongoose.Schema({ name: String, age: Number }));}
    User.find({ age: { $gt: 25 } }, (err, users) => {
    if (err) throw err;
        console.log(users);
});

const User = mongoose.model('User', new mongoose.Schema({ name: String, age: Number }));}
    User.find({ age: { $gt: 25 } }, (err, users) => {
    if (err) throw err;
        console.log(users);
});

const User = mongoose.model('User', new mongoose.Schema({ name: String, age: Number }));}
    User.find({ age: { $gt: 25 } }, (err, users) => {
    if (err) throw err;
        console.log(users);
});
  
connection.query("INSERT INTO users (name, age) VALUES (?, ?)", ["Alice", 30], (err) => {
    if (err) throw err;
});
