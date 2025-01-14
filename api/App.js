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
