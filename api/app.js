const express = require('express');
const bodyParser = require('body-parser');
const exampleRoute = require('./routes/productRoute');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', productRoute);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
