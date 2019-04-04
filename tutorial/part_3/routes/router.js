// Import task handker
const Task = require('../api/task');

// Init router
const express = require('express');
const router = express.Router();

// Init body parser
const bodyParser = require('body-parser');
router.use(bodyParser.json());

// Init database hook
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todolist', { useNewUrlParser: true });
const db = mongoose.connection;

// Get home page
router.get('/', (req, res) => res.send('Use localhost:5000/api/tasks'));

// Get tasks
router.get('/api/tasks', (req, res) => {
  Task.getTask((err, tasks) => {
    if(err){
      throw err;
    }
    res.json(tasks);
  })
});

module.exports = router;
