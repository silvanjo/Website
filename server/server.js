const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const mongoose = require('./database.js');

const PORT = 3000;
const distPath = path.join(__dirname, '../dist');

const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Serve static files from the Vue app (assuming a "dist" folder)
app.use(express.static(distPath));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
