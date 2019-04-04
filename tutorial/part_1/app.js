// Import module
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Init app
const app = express();
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/todolist');
const db = mongoose.connection;

app.get('/', (req, res) => res.send('Use localhost:5000/api/tasks'));

// Set up PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
