// Import module
const express = require('express');
const router = require('./routes/router');

// Init app
const app = express();
app.use(express.static(__dirname + '/client'));
app.use('/', router);

// Set up PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));